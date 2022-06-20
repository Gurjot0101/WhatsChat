import React from "react";
import "./LeftBar.css";
import { Avatar } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';


function Leftbar(){
    return(
        <div className="Bar-main">
            <div className="Dp"><Avatar /></div>
            <div className="Setting"><SettingsIcon /></div>
        </div>
    )
}

export default Leftbar;