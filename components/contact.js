import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("An error occurred. Please try again later.");
    }
  };
  const disabled = !message.trim();

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Your Name</label>
        <input
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Your Email</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          className="form-control"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button className="btn" type="submit" disabled={disabled}>
        Send
      </button>
    </form>
  );
};

export default Contact;
