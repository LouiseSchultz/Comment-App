import { useState } from "react";
import CommentSection from "./CommentSection";

function Comment({ comments, setComments }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    //onCommentSubmit({ name, message });
    setName("");
    setMessage("");
    console.log(e.target.name.value);
    console.log(e.target.message.value);
    const newComment = {
      name: e.target.name.value,
      message: e.target.message.value
    
    };
    setComments([...comments, newComment]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="message">Nachricht:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>

      <button  type="submit">Kommentar abschicken</button>
    </form>
  );
}

export default Comment;
