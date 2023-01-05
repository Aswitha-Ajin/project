import React, { useEffect, useState } from "react";
import "./CSS/emailbody.css";
import Emailsetting from "./Emailsetting";
import Emailtype from "./Emailtype";
import Emailbody1 from "./Emailbody1";
import { db } from "./firebase";
const Emailbody = () => {
    const [email,setEmail]=useState([]);
    useEffect(()=>{
        db.collection("login").onSnapshot(snapshot=>{
            setEmail(snapshot.docs.map(doc=>({
             id:doc.id,
             data:doc.data()
            })))
        })
    },[])
    console.log(email)
    return (

        <>

            <div className="emailbody">
            <Emailsetting/>
            <Emailtype/>
            {
                email.map(({id,data})=>{
                   return <Emailbody1 name={data.to} subject={data.subject} message={data.message} 
                   time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()} />
            
                })
            }
            
            
            </div>
        </>
    );
}
export default Emailbody;