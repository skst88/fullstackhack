import React, { useContext, useEffect, useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { commentsContext } from "../../../contexts/commentContext";
import CommentBody from "./CommentBody";
const Comment = () => {
  const { addComments, getCommentsForRoom, saveEditedComment, comments } =
    useContext(commentsContext);
  const [comment, setComment] = useState("");
  function handleChange(e) {
    setComment(e.target.value);
  }
  const params = useParams();
  useEffect(() => {
    getCommentsForRoom(params.id);
  }, []);
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  function creatingComment(e) {
    e.preventDefault();

    addComments(comment, user.id, params.id, user.email);
    setComment("");
  }
  const [bool, setBool] = useState(false);
  const [editComm, setEditComm] = useState("");

  return (
    <>
      {user ? (
        <>
          <h4 style={{ marginTop: "10px" }}>
            Comments ({comments ? comments.length : <h2>Loading</h2>})
          </h4>
          <div className="mt-4 container">
            <InputGroup className="mb-3 createComment">
              <FormControl
                rows={2}
                as="textarea"
                placeholder="Leave a review"
                maxLength="140"
                onChange={handleChange}
                value={comment}
              />
              <Button
                style={{ backgroundColor: "#b48d62", border: "none" }}
                onClick={creatingComment}
              >
                Send
              </Button>
            </InputGroup>
          </div>
        </>
      ) : (
        <>
          <h4>
            To leave a comment under the product, you need to{" "}
            <Link to="/login">log in</Link>
          </h4>
        </>
      )}

      <div className="mt-4 container bg-light">
        {comments ? (
          comments
            .sort((a, b) => b.createdAtMs - a.createdAtMs)
            .map((item) => <CommentBody key={item.id} item={item} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default Comment;
