import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import BookReview from "./BookReview";
import Comment from "../comments/Comment";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

function BookReviewPage() {
  const { id } = useParams();
  const [book_review, setBookReview] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_pic = currentUser?.profile_pic;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: book_review }, { data: comments }] = await Promise.all([
          axiosReq.get(`/book_reviews/${id}`),
          axiosReq.get(`/comments/?book_review=${id}`),
        ]);
        setBookReview({ results: [book_review] });
        setComments(comments);
      } catch (err) {
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <BookReview {...book_review.results[0]} setBookReviews={setBookReview} bookReviewPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_pic}
              book_review={id}
              setBookReview={setBookReview}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setBookReview={setBookReview}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>No comments yet 😿 be the first to comment!</span>
          ) : (
            <span>No comments... 😿</span>
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default BookReviewPage;