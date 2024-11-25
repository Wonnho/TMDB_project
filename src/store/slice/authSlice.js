import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import isLoggedIn from "../../log/Logging";

const initialState = {
  isLoggedIn: false,
  // isAdmin:false,
  // user:{
  //   name:'guest'
  // }
};

// const [value, setValue] = useState(false);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login:(state,action)=>{state.isLoggedIn=true},
    logout:(state,action)=>{state.isLoggedIn=false}
  },
});

export const { login,logout } = authSlice.actions;
export default authSlice.reducer;
