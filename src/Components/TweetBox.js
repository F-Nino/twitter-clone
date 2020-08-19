import React from "react";
import "../Styles/TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import MoodIcon from "@material-ui/icons/Mood";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar />
          <input placeholder="Whats happening?" type="text" />
        </div>
        {/*learn to add image upload */}
        <div className="tweetBoxUpload">
          <ImageIcon className="tweetBoxUploadIcon" />
          <GifIcon className="tweetBoxUploadIconGif" />
          <MoodIcon className="tweetBoxUploadIcon" />
          <Button className="tweetBoxTweetButton" size="medium">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
