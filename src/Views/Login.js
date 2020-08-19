import React, { useState } from "react";
import "../Styles/Login.css";
import "../Styles/LoginForm.css";
import fb from "../firebase";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  let history = useHistory();

  const renderForm = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setShowLogin(!showLogin);
  };

  const handleLoginSubmit = async (e) => {
    console.log("called");
    e.preventDefault();
    await fb.auth().signInWithEmailAndPassword(username, password);

    history.push("/home");
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("sign up called");
    fb.auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => console.log("created"));
    alert(
      `name ${username} and password ${password} and first name ${firstName} and last name ${lastName}`
    );
  };

  return (
    <div className="login">
      <div className="loginLeftContainer"></div>
      <div className="loginRightContainer">
        {showLogin ? (
          <div className="loginForm">
            <form>
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
                <Button
                  size="medium"
                  className="loginFormButton"
                  onClick={(e) => handleLoginSubmit(e)}
                >
                  Log In
                </Button>
              </div>
              <div className="loginFormButtonContainer">
                <Button
                  size="medium"
                  className="loginFormButton"
                  onClick={(e) => renderForm(e)}
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
                  onClick={(e) => handleSignUpSubmit(e)}
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
