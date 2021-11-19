import React from "react";
import "./styles.css";

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

export const Post = () => {

    return (
        <div className="postList">
            <div className="postAvatar">
                <img src ="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="profile avatar"/>
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="postHeaderText">
                        <h3>
                            Bobby Joe 
                            <span className="postUser">
                                @bobby_boi
                            </span>
                        </h3>
                    </div>
                    <div className="postHeaderDescription">
                        <p>Wowie, very cool, this is my first post!</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/R8n7YlPHe34dy/giphy.gif" alt="Random gif I found"/>
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