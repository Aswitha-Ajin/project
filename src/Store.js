import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./EmailSlice";
 export const store =configureStore({
    reducer:{
        mail:mailReducer,
    }
 });