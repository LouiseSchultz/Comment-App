import { useState } from "react";
function Comment({ comments, setComments }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    setName("");
    setMessage("");
    setEmail("");
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
    <div className="d-flex p-2">
      <div className="container p-3 my-3 bg-success text-light">
        <div className="comments">
          <form onSubmit={handleSubmit}>
            <div className="text">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h4> Schreib einen Kommentar</h4>{" "}
              </div>
              <p>
                Deine Emailadresse wird nicht öffentlich angezeigt. Erfoderliche
                Felder sind mit * markiert.
              </p>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center ">
              <div className="name">
                <label htmlFor="name">*Name:</label>
              </div>
              <input
                type="text"
                required="required"
                id="name"
                name="name"
                placeholder="Dein Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="d-flex flex-column justify-content-c
enter align-items-center">
                <div className="message"> </div>
                <label htmlFor="message">*Nachricht:</label>
                <textarea
                  id="message"
                  name="message"
                  required="required"
                  placeholder="Deine Nachricht"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <div className="email">
                <label htmlFor="email">*Email:</label>{" "}
              </div>
              <input
                type="email"
                name="email"
                placeholder="Hier kommt dein Email hin"
                required="required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>{" "}
                             Abschicken
 <div className="submit">
                <button
                  type="submit"
                  class="btn btn-light"
                  style={{ width: "60px", border: "5px" }}>
                    
                  <i
                    className="bi bi-send"
                    style={{ color: "grey", FontSize: "1rem" }}></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comment;
