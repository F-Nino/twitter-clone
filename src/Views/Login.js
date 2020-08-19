import React, { useState } from "react";
import "../Styles/Login.css";
import LoginForm from "../Components/LoginForm";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLoginSubmit = (e) => {
    console.log("called");
    e.preventDefault();
    alert(`name ${username} and password ${password}`);
  };

  return (
    <div className="login">
      <div className="loginLeftContainer"></div>
      <div className="loginRightContainer">
        {showLogin ? (
          <div className="loginForm">
            <form onSubmit={handleLoginSubmit}>
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
                  onClick={() => setShowLogin(!showLogin)}
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="signUpForm">
            <form>
              <div className="loginFormHeader">
                <TwitterIcon className="loginFormTwitterIcon" size="small" />
                <h2>Create your Account</h2>
              </div>
              <div className="signUpRow">
                <div className="singUpFormInputContainer">
                  <input
                    placeholder="First Name"
                    className="signUpFormInput"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="signUpFormInputContainer">
                  <input
                    placeholder="Last Name"
                    className="signUpFormInput"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="signUpRow">
                <div className="singUpFormInputContainer">
                  <input
                    placeholder="Username"
                    className="signUpFormInput"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="signUpFormInputContainer">
                  <input
                    placeholder="Password"
                    className="signUpFormInput"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="loginFormButtonContainer">
                <Button
                  size="medium"
                  className="loginFormButton"
                  onClick={() => setShowLogin(!showLogin)}
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
