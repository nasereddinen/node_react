import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { setUserToken, setLoginInfos ,setUsername} from "../featureRedux/userSlice";
import { useDispatch } from "react-redux";
import Axios from "axios";

function Formulaire() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    Axios.post("http://localhost:3001/api/v1/user/login", data)
      .then((response) => {
        dispatch(setLoginInfos(data));
        dispatch(setUserToken(response.data.body.data.token));
        dispatch(setUsername(response.data.body.data.user.userName));
        


        navigate("/User");
      })
      .catch((error) => {
        console.error("Cet identifiant ou ce mot de passe est inconnu, veuillez réessayer.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        )
      }
        export default Formulaire;