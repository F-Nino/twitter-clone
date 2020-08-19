import React from "react";
import "../Styles/Home.css";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Widgets from "../Components/Widgets";

const Home = () => {
  return (
    <div className="home">
      {/* Side bar*/}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
};

export default Home;
