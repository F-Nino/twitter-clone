import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../auth";
import Home from "./Home";
import Login from "./Login";
import "../Styles/App.css";
import PrivateRoute from "../Components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/home" component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
};
export default App;
