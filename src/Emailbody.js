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
            <Emailbody1 name="AmbitionBox " subject=" Welcome to Google Analytics!" message="  Valuable insights await you" time="5:15PM" />
            <Emailbody1 name="AWS India " subject=" Secure your workloads  in the cloud" message="This message distributed by Amazon Web Services iptd " time="5:15PM" />
            <Emailbody1 name="Bank of Baroda " subject=" Debit Card offers on Meesho " message=" Please click here to see a web based version of this e-mail. " time="5:15PM" />
            <Emailbody1 name="Flipkart " subject="Tracking " message=" Flipkart customer care " time="5:15PM" />
            
            </div>
        </>
    );
}
export default Emailbody;