import React, { usestate } from "react";
import Axios from 'axios';
import "./App.css";

function App() {

const [usernameReg, setUsernameReg] = useState('');
const [passwordReg, setPasswordReg] = useState('');

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [loginStatus, setLoginStatus] = useState('');

const register = () => { 
  Axios.post("https://nerds737.github.io", {
    username: usernameReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response);
  });
};

const login = () => { 
  Axios.post("https://nerds737.github.io",{
    username: username,
    password: password,
  }).then((response) => {

    if (response.data.message){ 
      setLoginStatus(response.data.message)
    } else {
      setLoginStatus(response.data[0].username);
    }
   });
};
        return(
    <div className="App">
        <div className="registration">
    <h1>Registration</h1>
    <label>Username</label>
    <input type="text" onChange={(e) =>{
       setUsernameReg(e.target.value);
    }}
    />
    <label>Password</label>
    <input type="text" onChange={(e) =>{
       setPasswordReg(e.target.value);
    }}
    />
    <button onClick={register}> Registration </button>
    </div>
        <div className="login">
        <h1>Login</h1>
    <input type="text" placeholder="Username..." onChange={(e) =>{
       setUsername(e.target.value);
    }}
    />
    <input type="text" placeholder="Password..." onChange={(e) =>{
       setPassword(e.target.value);
    }}
    />
    <button onClick={login}> Login </button>
    </div>

<h1>{loginStatus}</h1>    
        </div>
       );
    }
    export default App;
