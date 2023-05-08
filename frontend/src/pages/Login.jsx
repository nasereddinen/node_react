import React from "react";
import { useNavigate } from "react-router-dom";
import { setUserToken, setLoginInfos,setUsername  } from "../featureRedux/userSlice";
import {useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import Formulaire from "../components/Form"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  return (
    <>
    <div className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Formulaire/>
      </div>
    </div>
    </>
  );
};

export default Login;

