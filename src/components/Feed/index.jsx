import React from 'react';
import MakeTweet from "../MakeTweet/index";

import './styles.css';

export const Feed = () => {

    return(
        <div className="feed">
            {/* Header */}
            <div className="feedHeader">
                <h2>Home</h2>
            </div>
            

            {/* MakeTweet */}
            <div className="makeTweet">
                <MakeTweet />
            </div>
            

            {/* Posts */}
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>

        </div>
    )
}

export default Feed;