import { useState, useEffect } from "react";
import Header from "./Header";
import "./index.css";
import Comment from "./Comment";
import CommentSection from "./CommentSection";

function App() {
  const [comments, setComments] = useState(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments"));
    return savedComments || [];
  });

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <Header />
      <CommentSection comments={comments} setComments={setComments} />
      <Comment comments={comments} setComments={setComments} />
    </>
  );
}
export default App;
