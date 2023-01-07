import React from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import Emailbody from "./Emailbody";
import Sidebar from "./Sidebar";
import Compose from "./Compose"
import { IconButton, Avatar } from "@mui/material";

import "./CSS/header.css";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./EmailSlice";



function Header() {
    const messageopen= useSelector(selectSendMessageIsOpen)
    return (
        <>  
            <div className="header">
                <div className="headerleft">
                    <IconButton>
                        <ReorderIcon></ReorderIcon>
                    </IconButton>
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="logo" />
                </div>

                <div className="headermiddle">
                    <div className="searchmail">
                        <IconButton>
                            <SearchIcon></SearchIcon>
                        </IconButton>
                        <input type="text" placeholder="Search in mail" />
                        <IconButton>
                            <ExpandMoreIcon></ExpandMoreIcon>
                        </IconButton>

                    </div>
                </div>
                <div className="headerright">
                    <IconButton>
                        <HelpIcon></HelpIcon>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon></SettingsIcon>
                    </IconButton>
                    <IconButton>
                        <AppsIcon></AppsIcon>
                    </IconButton>
                    <Avatar ></Avatar>


                </div>
            </div>
           <div >
           
           
           </div>
           <div className="appbody">
           
      <Sidebar/>
      <Emailbody/>

      
            </div>
            
            <div>
                {
                    
                messageopen && <Compose/>
                }
            </div>
           
            
            
           
           

        </>

    );
}
export default Header;