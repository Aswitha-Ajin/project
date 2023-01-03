import React from "react";
import "./CSS/emailbody.css";
import Emailsetting from "./Emailsetting";
import Emailtype from "./Emailtype";
import Emailbody1 from "./Emailbody1";
const Emailbody = () => {
    return (

        <>

            <div className="emailbody">
            <Emailsetting/>
            <Emailtype/>
            <Emailbody1 name="Aswitha" subject=" Good Morning" message="  clonegmail clonevgmail clone clonegmail clonegmail clone" time="5:15PM" />
            
            
            </div>
        </>
    );
}
export default Emailbody;