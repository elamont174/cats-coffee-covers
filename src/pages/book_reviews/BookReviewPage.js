import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import BookReview from "./BookReview";

function BookReviewPage() {
  const { id } = useParams();
  const [book_review, setBookReview] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: book_review }] = await Promise.all([
          axiosReq.get(`/book_reviews/${id}`),
        ]);
        setBookReview({ results: [book_review] });
      } catch (err) {
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <BookReview {...book_review.results[0]} setBookReviews={setBookReview} bookReviewPage />
      </Col>

    </Row>
  );
}

export default BookReviewPage;