import { useState } from "react";

function CommentSection({ comments, setComments }) {
  const commentCount = comments.length;
  const handleDelete = (index) => {
    const updatedComments = comments.filter(
      (comment, commentIndex) => commentIndex !== index
    );
    setComments(updatedComments);
  };

  return (
    <div class="d-flex p-2">
      <div class="d-flex justify-content-center">
        <div className="container p-3 my-3 bg-success text-white">
          <h5>Kommentare: {commentCount}</h5>
          {comments.map((comment, index) => (
            <div key={index}>
              <p>Name: {comment.name}</p>
              <p>Datum: {comment.date}</p>
              <p>Nachricht: {comment.message}</p>

              <button
                type="button"
                className="btn btn-light"
                style={{ width: "80px", height: "35px" }}
                onClick={() => handleDelete(index)}>
                <i
                  class="bi bi-eraser"
                  style={{ color: "grey", FontSize: "1rem" }}>
                  {" "}
                </i>
              </button>
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default CommentSection;
