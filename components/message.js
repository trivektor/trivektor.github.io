import { useState } from "react";

const Message = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    console.log("submitting");
  };

  return (
    <div className="p-4">
      <form onSubmit={onSubmit}>
        <div>
          <label>Your name</label>
          <input
            className="block border border-purple-200"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Your message</label>
          <textarea
            className="block border border-purple-200"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div>
          <button>send</button>
        </div>
      </form>
    </div>
  );
};

export default Message;
