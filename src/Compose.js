
import React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import "./CSS/compose.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImageIcon from '@mui/icons-material/Image';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

//import { IconButton } from "@mui/material";
const Compose=()=>{
    return(

        <>
       <div className="compose1">
       <div className="compose1header">
       <div className="compose1headerLeft">
<span>New Message</span>
       </div>
      <div className="compose1headerRight">

<RemoveIcon/>
<OpenInFullIcon/>
<CloseIcon/>


      </div>
      </div>
       <div className="compose1body">
       <div className="compose1bodytype">
<input type="email" placeholder="Reciepients"/>
<input type="email" placeholder="Subject"/>
<textarea rows="20"></textarea>

</div> 
       </div>
       <div className="compose1footer">
       <div className="compose1footerLeft">
         <button type="submit">
            Send <ArrowDropDownIcon/>
         </button>
</div>
<div className="compose1footerRight">
<TextFormatIcon/>
<AttachFileIcon/>
<InsertLinkIcon/>
<InsertEmoticonIcon/>
<InsertDriveFileIcon/>
<ImageIcon/>
<CreateIcon />
<DeleteIcon/>

</div>
       </div>
       </div>
      
         
        </>
    );
}
export default Compose;