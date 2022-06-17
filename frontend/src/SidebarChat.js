import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat(props) {
  const lastMessage = props.lastMessage || {
    message: "This is last message",
    timestamp: "This is time stamp",
  };
  return (
    <div className="sidebarChat">
      <div className="sidebarChat__head">
        <div>
          <Avatar />
        </div>
        <div className="sidebarChat__info">
          <h2>{props.roomName}</h2>
          <p>{lastMessage.timestamp}</p>
        </div>
        <div></div>
      </div>
      <div className="sidebarChat__tail">
        <p>{lastMessage.message}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
