import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined, Add } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import { useStateValue } from "./StateProvider";

function Sidebar(props) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Enter for search" type="text" />
        </div>
        <div className="collection">
          <div className="collection__number">14</div>
          <img
            height={17}
            src="https://cdn.iconscout.com/icon/free/png-256/save-3244517-2701888.png"
          ></img>
        </div>
      </div>
      <div className="sorting__bar">
        <div>
          Sort By:
        </div>
        <div className="add__contact">
          <div className="add__contact__text">Add New</div>
          <div className="add__contact__button">
            <Add />
          </div>
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat roomName="Dance Room" lastMessage="last message" />
        <SidebarChat roomName="Dev Room" lastMessage="This is last Message" />
        <SidebarChat roomName="Epic Room" lastMessage="This is last Message" />
      </div>
    </div>
  );
}

export default Sidebar;
