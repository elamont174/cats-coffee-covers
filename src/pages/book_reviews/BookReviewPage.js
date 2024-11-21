import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

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
        console.log(book_review);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-2 p-lg-2" lg={12}>
        <p>Book Review component</p>
        <Container className={appStyles.Content}>Comments</Container>
      </Col>
    </Row>
  );
}

export default BookReviewPage;