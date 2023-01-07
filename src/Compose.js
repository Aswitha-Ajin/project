import React, { useState } from "react";
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
import {Button} from "@mui/material";
import { closeSendMessage } from "./EmailSlice";
import { useDispatch } from "react-redux";
//import firebase from "firebase";
import { db } from "./firebase.js";
import { getFirestore, collection, getDocs,addDoc, Timestamp } from 'firebase/firestore/lite';
import { Login } from "@mui/icons-material";




const Compose = () => {
       const [to, setTo] = useState("");
       const [subject, setSubject] = useState("");
       const [message, setMessage] = useState("");

       const dispatch = useDispatch();

       const formSubmit = async(e) => {
              e.preventDefault();
              if(to === " ") {
                     return alert("To is required");
              }
              if(subject === " ") {
                     return alert("Subject is required");
              }
              await addDoc(collection(db,"login"),{
                     to,subject,message,timestamp:Timestamp
              })
              // db.collection("login").add({
              //        to,
              //        subject,
              //         message,
              //        timestamp:firebase.firestore.FieldValue.serverTimestamp()
              //        });
                     alert("Email send successfully");

                    setTo(" ");
                     setSubject(" ");
                     setMessage(" ");
              
              dispatch(closeSendMessage());
       }
       
       return (

              <>
                     <div className="compose1">
                            <div className="compose1header">
                                   <div className="compose1headerLeft">
                                          <span>New Message</span>
                                   </div>
                                   <div className="compose1headerRight">

                                          <RemoveIcon />
                                          <OpenInFullIcon />
                                          <CloseIcon onClick={() => dispatch(closeSendMessage())} />


                                   </div>
                            </div>
                            <form onSubmit={formSubmit}>
                                   <div className="compose1body">
                                          <div className="compose1bodytype">
                                                 <input type="email" placeholder="Reciepients" value={to} onChange={(e) => setTo(e.target.value)} />
                                                 <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                                 <textarea rows="20" value={message} onChange={(e) => setMessage(e.target.value)}>{message}</textarea>

                                          </div>

                                   </div>
                            
                            <div className="compose1footer">
                                   <div className="compose1footerLeft">
                                          <Button variant="contained" type="submit">
                                                 Send <ArrowDropDownIcon />
                                          </Button>
                                   </div>

                                   <div className="compose1footerRight">
                                          <TextFormatIcon />
                                          <AttachFileIcon />
                                          <InsertLinkIcon />
                                          <InsertEmoticonIcon />
                                          <InsertDriveFileIcon />
                                          <ImageIcon />
                                          <CreateIcon />
                                          <DeleteIcon />

                                   </div>
                            </div>
                            </form>
                     </div>


              </>
       );
}
export default Compose;

