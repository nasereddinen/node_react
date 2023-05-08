import "../pages/main.css"
import { NavLink } from "react-router-dom";
import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { setUserToken, setLoginInfos,setUsername  } from "../featureRedux/userSlice";
import {useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import axios from "axios";

const Accounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "$48,098.43",
    description:"Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "$48,098.43",
    description:"Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$48,098.43",
    description:"Available Balance",
  },
];
function EditUser({title, amount, description}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const token = localStorage.getItem("token");
  

  const handleSubmit = (e) => {
    e.preventDefault();


    const data = {
      username: e.target[0].value,
      firstname: e.target[1].value,
      lastname: e.target[2].value,
    };
    console.log(data);
    axios.post("http://localhost:3001/api/v1/user/update", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        dispatch(setLoginInfos(data));
        localStorage.setItem("username", username);
        console.log(response.data.body);
        navigate("/User");
      }
      ).catch((error) => {
        console.error("Cet identifiant ou ce mot de passe est inconnu, veuillez réessayer.");
      }
      );
  }


    return(
<>
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit user info</h1>
        <form onSubmit={handleSubmit} > 
          <div className="input-user">
            <label htmlFor="username">Username:</label>
            <input 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text" 
            id="username" />
          </div>
          <div className="input-user">
            <label htmlFor="firstname">First name:</label>
            <input disabled="disabled"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            
            
            type="firstname" id="username" />
          </div>
          <div className="input-user">
            <label htmlFor="lastname">Last name:</label>
            <input disabled="disabled"
            onChange={(e) => setLastname(e.target.value)}
            
            
            type="lastname" id="username" />
          </div>
          <div className="row">
          <button className="edit-button">Save</button>
          <button className="edit-button">Cancel</button>
          </div>
        </form>
      </div>
      <div className="column">
        {Accounts.map((account) => (
          <div className="darkField" key={account.id}>
            <div className="left">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">{account.description}</p>
            </div>
            <NavLink to="/Transaction">
              <i className="fa-solid fa-chevron-right"></i>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}
    export default EditUser;