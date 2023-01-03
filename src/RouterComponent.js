import React from "react";
import {BrowserRouter,Route,Routes} from'react-router-dom';
import LoginComponent from "./LoginComponent";
import Gmail from "./Gmail";


function RouterComponent()
{
return(

<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<LoginComponent/>}/>
    <Route path="/gmail" element={<Gmail/>}/>
    
</Routes>
</BrowserRouter>

</>
    );
}
export default RouterComponent;