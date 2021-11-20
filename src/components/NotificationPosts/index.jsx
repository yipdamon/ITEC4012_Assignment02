import React from "react";
import "./styles.css";

import FavoriteIcon from '@mui/icons-material/Favorite';

export const NotificationPosts = () => {

    return (
        // Notification template
        <div className="notiList">
            <div className="notiIcon">
                <FavoriteIcon/>
            </div>
            <div className="notiBody">
                    <div className="notiProfile">
                        <img src ="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="profile avatar"/>
                        <h3>
                            Damon Yip 
                            <span className="notiUser">
                                liked your tweet
                            </span>
                        </h3>
                    </div>
                    <div className="notiDescription">
                        <p>Wowie, very cool, this is my first post!</p>
                    </div>
            </div>
        </div>
    )
}

export default NotificationPosts