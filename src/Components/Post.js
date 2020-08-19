import React from "react";
import "../Styles/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({ displayName, username, varified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar />
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              Felipe Nino{" "}
              <span className="postHeaderSpecial">
                <VerifiedUserIcon className="postBadge" />
              </span>
            </h3>
          </div>
          <div className="postHeaderDescription">
            <p>This is the header description!</p>
          </div>
        </div>
        {!image === undefined && (
          <img
            src="https://giphy.com/gifs/the-office-smile-eKDp7xvUdbCrC"
            alt="image"
          />
        )}
        <div className="postFooter">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
