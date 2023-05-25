
function CommentSection({ comments }) {
const commentCount = comments.length;


  return (
    <div>
      <h2>Kommentare: {commentCount}</h2>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>Name: {comment.name}</p>
          <p>Nachricht: {comment.message}</p>
        </div>
      ))}

     
    </div>
  );
}

export default CommentSection;
