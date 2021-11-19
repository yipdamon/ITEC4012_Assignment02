import React from 'react';
import MakeTweet from "../MakeTweet/index";
import Post from '../Post';

import './styles.css';

export const Feed = () => {

    return(
        <div className="feed">
            {/* Header Section */}
            <div className="feedHeader">
                <h2>Home</h2>
            </div>

            {/* MakeTweet Section */}
            <div className="makeTweet">
                <MakeTweet />
            </div>

            {/* Posts Section */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
}

export default Feed;