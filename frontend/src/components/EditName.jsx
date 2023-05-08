import React, { useEffect } from "react"
import "../pages/main.css";
import { NavLink } from "react-router-dom";
import { setUserFirstName,  setUserLastName ,setUsername} from "../featureRedux/userSlice"; 
import { useDispatch, useSelector } from "react-redux";

function EditName() {
  const dispatch = useDispatch();
  const username = localStorage.getItem("username");
  if (username) {
    dispatch(setUsername(username));
  }
  const userFirstName = useSelector((state) => state.user.username);
 
   
 
    return (
      <div className="header">
        <h1>Welcome back<br />{`${userFirstName}`}!</h1>
        <NavLink to="/EditUser">
        <button className="weight">Edit Name</button>
        </NavLink>
      </div>
      
     ) }
      export default EditName;