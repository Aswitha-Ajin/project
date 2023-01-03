import React from "react";
import "./CSS/sidebar.css";
import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from '@mui/icons-material/Inbox';
import CreateIcon from '@mui/icons-material/Create';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { IconButton, Button } from "@mui/material";
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = () => {
    return (

        <>

<div className="Sidebar">

<Button startIcon={<CreateIcon />}
           className="compose">Compose</Button>
        <Sidebaroptions Icon={InboxIcon} title="Inbox" number="3" active={true} />
       <Sidebaroptions Icon={StarOutlineIcon} title="Starred" number={56} />
       <Sidebaroptions Icon={AccessTimeIcon} title="Snoozed" number={56} />
       <Sidebaroptions Icon={LabelImportantIcon} title="Important" number={56} />
       <Sidebaroptions Icon={SendIcon} title="Sent" number={56} />
       <Sidebaroptions Icon={InsertDriveFileIcon} title="Draft" number={56} />
       <Sidebaroptions Icon={KeyboardArrowDownIcon} title="More" />
       <h5 className="Label">
       Label
       <IconButton>
               <AddIcon></AddIcon>
           </IconButton>
       </h5>
   </div>
        </>
    );
}
export default Sidebar;