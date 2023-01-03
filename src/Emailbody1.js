import React from "react";
import "./CSS/emailbody.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
//import { IconButton } from "@mui/material";
const Emailbody1 = ({name, subject, message,time}) => {
    return (

        <>
        <div className="emailbody1">
            <div className="emailbodyLeft1">
            <CheckBoxOutlineBlankIcon />
                    <StarBorderIcon />
                   <h4><b></b>{name}</h4>
            </div>
            <div className="emailbodyMiddle1">
            <div className="emailbodyMiddleMsg1">
<p><b>{subject}</b> {message}</p>
</div>
            </div>
            <div className="emailbodyRight1">
<p>{time}</p>
            </div>
        </div>
        </>
    );
}
export default Emailbody1;