import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setUserFirstName} from "../featureRedux/userSlice";
import { NavLink, useNavigate } from "react-router-dom";

function SignIn() {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  if (username) {
    dispatch(setUserFirstName(username));
  }
  const userFirstName = useSelector((state) => state.user.username);
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(setUserFirstName(token));
  }

  

 
  /*const navigate= useNavigate();*/

  const handleSignOut = () => {
    dispatch(setLogout());
    navigate("/")
  }
  const handleSignIn = () => {
    dispatch(setUserFirstName());
  };

  if (token) {
    return (
      <div>
        <NavLink className="main-nav-item" to="/User">
          <i className="fa fa-user-circle"></i>
          <p className="user name">`${userFirstName}`</p>
        </NavLink>
        <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    );
  } else {
    return (
      <div>
        <NavLink className="main-nav-item" to="/Login" onClick={handleSignIn}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    );
  }
}

export default SignIn;