import React from "react";
import "../Styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <SearchIcon className="widgetSearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgetsContainer">
        <h2>What's happening</h2>
      </div>

      <div className="widgetsFollow">
        <h2>Who to Follow</h2>
      </div>
    </div>
  );
};

export default Widgets;
