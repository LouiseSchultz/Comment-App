import { useState, useEffect } from "react";
import Header from "./Header";
import Comment from "./Comment";
import CommentSection from "./CommentSection";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  const [comments, setComments] = useState(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments"));
    return savedComments || [];
  });

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <Header />
        <CommentSection comments={comments} setComments={setComments} />
        <Comment comments={comments} setComments={setComments} />
      </div>
    </div>
  );
}
export default App;
