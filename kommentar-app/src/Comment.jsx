import { useState } from "react";

function Comment({ comments, setComments }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("")

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    setName("");
    setMessage("");
    setEmail("")
    console.log(e.target.name.value);
    console.log(e.target.message.value);
    const ISODate = new Date().toLocaleString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    
    const newComment = {
      name: e.target.name.value,
      message: e.target.message.value,
      date: ISODate,
    };
    setComments([...comments, newComment]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">*Name:</label>
      <input
        type="text"
        required="required"
        id="name"
        name="name"
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4> Schreib einen Kommentar</h4>
      <p>
        Deine Emailadresse wird nicht öffentlich angezeigt. Erfoderliche Felder
        sind mit * markiert.
      </p>
      <label htmlFor="message">*Nachricht:</label>
      <textarea
        id="message"
        name="message"
        required="required"
        placeholder="Deine Nachricht"
        value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit">Kommentar abschicken</button>
      <label htmlFor="email">*Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Hier kommt dein Email hin"
        required="required"
        value={email}
        onChange={(e) => setEmail(e.target.value)}></input>{" "}
    </form>
  );
}

export default Comment;
