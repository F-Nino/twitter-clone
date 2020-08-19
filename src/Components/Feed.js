import React from "react";
import "../Styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      {/* Header Home */}
      <div className="feedHeader">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/*Post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
