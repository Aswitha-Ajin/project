import React from "react";
import "./CSS/sidebar.css";
const SidebarOptions=({Icon,title,number,active})=>{
    return(

        <>
       
       <div className={`side ${active && `side--active`}`}>
        <Icon/>
        <h4>{title}</h4>
        <p>{number}</p>

       </div>
         
        </>
    );
}
export default SidebarOptions;