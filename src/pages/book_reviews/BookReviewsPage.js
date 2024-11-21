import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import BookReview from "./BookReview";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/BookReviewsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function BookReviewsPage({ message, filter = "" }) {
  const [book_reviews, setBookReviews] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchBookReviews = async () => {
      try {
        const { data } = await axiosReq.get(`/book_reviews/?${filter}search=${query}`);
        setBookReviews(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchBookReviews();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search reviews"
          />
        </Form>

        {hasLoaded ? (
          <>
            {book_reviews.results.length ? (
              <InfiniteScroll
                children={book_reviews.results.map((book_review) => (
                  <BookReview key={book_review.id} {...book_review} setBookReviews={setBookReviews} />
                ))}
                dataLength={book_reviews.results.length}
                loader={<Asset spinner />}
                hasMore={!!book_reviews.next}
                next={() => fetchMoreData(book_reviews, setBookReviews)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default BookReviewsPage;