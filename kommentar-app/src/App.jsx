import { useState } from "react";
import Header from "./Header";
import "./index.css";
import Comment from "./Comment";
import CommentSection from "./CommentSection";
function App() {
  const [comments, setComments] = useState([
    { name: "Leotrim", message: "Hi" },
  ]);
  return (
    <>
      <Header />
      <CommentSection comments={comments} />
      <Comment comments={comments} setComments={setComments} />
    </>
  );
}
export default App;
