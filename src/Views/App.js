import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../auth";
import Home from "./Home";
import Login from "./Login";
import "../Styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
};
export default App;
