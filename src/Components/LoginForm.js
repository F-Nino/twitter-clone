import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../Styles/LoginForm.css";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log("called");
    e.preventDefault();
    alert(`name ${username} and password ${password}`);
  };
  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <div className="loginFormHeader">
          <TwitterIcon className="loginFormTwitterIcon" size="small" />
          <h2>Welcome</h2>
        </div>
        <div className="loginFormInputContainer">
          <input
            placeholder="Username"
            className="loginFormInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="loginFormInputContainer">
          <input
            placeholder="Password"
            className="loginFormInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="loginFormButtonContainer">
          <Button size="medium" className="loginFormButton" type="submit">
            Log In
          </Button>
        </div>
        <div className="loginFormButtonContainer">
          <Button
            size="medium"
            className="loginFormButton"
            onClick={() => props.showLogin}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
