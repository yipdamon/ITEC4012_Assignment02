import React from "react";
import "./styles.css";

// icon imports
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

export const Post = () => {

    return (
        // Creates one post
        <div className="postList">
            {/* Post avatar images */}
            <div className="postAvatar">
                <img src ="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="profile avatar"/>
            </div>
            <div className="postBody">
                <div className="postHeader">

                    {/* Post's display name and username */}
                    <div className="postDisplay">
                        <h3>
                            Bobby Joe 
                            <span className="postUser">
                                @bobby_boi
                            </span>
                        </h3>
                    </div>

                    {/* Post Caption */}
                    <div className="postCaption">
                        <p>Wowie, very cool, this is my first post!</p>
                    </div>
                </div>
                {/* Post's image "if applicable" */}
                <img src="https://media.giphy.com/media/R8n7YlPHe34dy/giphy.gif" alt="Random gif I found"/>

                {/* Post's buttons to reply, retweet, like, and share */}
                <div className="postButtons">
                    <ChatBubbleOutlineIcon/>
                    <RepeatIcon/>
                    <FavoriteBorderIcon/>
                    <IosShareIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post