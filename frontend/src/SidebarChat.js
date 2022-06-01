import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat(props) {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>{props.roomName}</h2>
        <p>{props.lastMessage.message}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
