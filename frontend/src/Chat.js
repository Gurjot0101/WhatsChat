import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const lastSeen = "today";
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/api/v1/messages/new", {
      message: input,
      name: user?.displayName,
      timestamp: new Date().toUTCString(),
      uid: user?.uid,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Dance Room</h3>
          <p>Last Seen at {lastSeen}</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`chat__message ${
              user?.uid === message.uid && "chat__receiver"
            }`}
          >
            <div className="chat__name">{message.name}</div>

            <div className="chat__msg">{message.message}</div>
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
