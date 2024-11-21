import React from "react";
import styles from "../../styles/BookReview.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const BookReview = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    book_title,
    author,
    genre,
    your_review,
    image,
    updated_at,
    bookReviewPage,
    setBookReviews,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.book_review("/likes/", { book_review: id });
      setBookReviews((prevBookReviews) => ({
        ...prevBookReviews,
        results: prevBookReviews.results.map((book_review) => {
          return book_review.id === id
            ? { ...book_review, likes_count: book_review.likes_count + 1, like_id: data.id }
            : book_review;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setBookReviews((prevBookReviews) => ({
        ...prevBookReviews,
        results: prevBookReviews.results.map((book_review) => {
          return book_review.id === id
            ? { ...book_review, likes_count: book_review.likes_count - 1, like_id: null }
            : book_review;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.BookReview}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && bookReviewPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/book_reviews/${id}`}>
        <Card.Img src={image} alt={book_title} />
      </Link>
      <Card.Body>
        {book_title && <Card.Title className="text-center">{book_title}</Card.Title>}
        {author && <Card.Title className="text-center">{author}</Card.Title>}
        {genre && <Card.Text>{genre}</Card.Text>}
        {your_review && <Card.Text>{your_review}</Card.Text>}
        <div className={styles.BookReviewBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own review!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like reviews!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/book_reviews/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookReview;