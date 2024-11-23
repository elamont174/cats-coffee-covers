import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import InfiniteScroll from "react-infinite-scroll-component";
import BookReview from "../book_reviews/BookReview";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileBookReviews, setProfileBookReviews] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileBookReviews }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/book_reviews/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileBookReviews(profileBookReviews);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.name}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.book_reviews_count}</div>
              <div>reviews</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
        <Col className="py-2 p-0 p-lg-2" lg={12}>
        <strong>Bio:</strong>{profile?.bio && <Col className="p-3">{profile.bio}</Col>}
        <strong>Location:</strong>{profile?.location && <Col className="p-3">{profile.location}</Col>}
        <strong>Currently Reading:</strong>{profile?.bio && <Col className="p-3">{profile.currently_reading}</Col>}
        <strong>Favourite coffee:</strong>{profile?.bio && <Col className="p-3">{profile.favourite_coffee}</Col>}
        <strong>Pet's name:</strong>{profile?.bio && <Col className="p-3">{profile.pets_name}</Col>}</Col>
      </Row>
    </>
  );

  const mainProfileBookReviews = (
    <>
      <hr />
      <p className="text-center">{profile?.name}'s reviews</p>
      <hr />
      {profileBookReviews.results.length ? (
        <InfiniteScroll
          children={profileBookReviews.results.map((book_review) => (
            <BookReview key={book_review.id} {...book_review} setBookReviews={setProfileBookReviews} />
          ))}
          dataLength={profileBookReviews.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileBookReviews.next}
          next={() => fetchMoreData(profileBookReviews, setProfileBookReviews)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't written a review yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfileBookReviews}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;