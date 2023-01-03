
import React from "react";
import "./CSS/emailbody.css";
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const Emailtype = () => {
    return (

        <>
<div className="emailtype">
    <div className="options options--active">
<InboxIcon/>
<p>Primary </p>
    </div>
   <div className="options">
<LocalOfferIcon/>
 <p> Promotions</p>
    </div>
    <div className="options">
<PeopleAltIcon/>
<p> Social</p>
    </div>
</div>
            

        </>
    );
}
export default Emailtype;