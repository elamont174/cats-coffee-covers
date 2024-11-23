import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import BookReview from "./BookReview";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";

function BookReviewsPage({ message, filter = "" }) {
  const [book_reviews, setBookReviews] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchBookReviews = async () => {
      try {
        const { data } = await axiosReq.get(`/book_reviews/?${filter}`);
        setBookReviews(data);
        setHasLoaded(true);
      } catch (err) {
      }
    };

    setHasLoaded(false);
    fetchBookReviews();
  }, [filter, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        {hasLoaded ? (
          <>
            {book_reviews.results.length ? (
              book_reviews.results.map((book_review) => (
                <BookReview key={book_review.id} {...book_review} setBookReviews={setBookReviews} />
              ))
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