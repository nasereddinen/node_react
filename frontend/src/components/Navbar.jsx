import React from "react"
import "../components/main.css"
import { NavLink } from "react-router-dom";
import SignIn from "../components/SignIn";
import Logo from "../assets/argentBankLogo.webp"
function Navbar(){
  return(
<div className="main-nav">
<NavLink className="main-nav-logo" to="/">
  <img
    className="main-nav-logo-image"
    src={Logo}
    alt="Argent Bank Logo"
  />
  <h1 className="sr-only">Argent Bank</h1>
</NavLink>
<SignIn />
</div>
)}
export default Navbar;