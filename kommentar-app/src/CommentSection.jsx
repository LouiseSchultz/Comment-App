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
    <div>
      <h2>Kommentare: {commentCount}</h2>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>Name: {comment.name}</p>
          <p>Datum: {comment.date}</p>
          <p>Nachricht: {comment.message}</p>
          <button type="button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
