import React from 'react';

import './styles.css';
import { Button } from '../Button';

export const MakeTweet = () => {

    return(
        // Make tweet box
        <div className="MakeTweet">
            {/* Tweeter's profile avatar icon */}
            <div className="tweetProfile">
                <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="profile icon"/>
            </div>

            {/* Form for user to make tweet */}
            <div>
                <form className="formLayout">
                    <input className="tweetField" placeholder="What's happening?" type="text" name="tweet"/>
                </form>
                
                {/* Button for user to post their tweet */}
                    <Button text="Tweet" type="tweetButton" isDisabled={true} action={() => alert("You posted a tweet!")}>
                        <button>Tweet</button>
                    </Button>
            </div>
        </div>
    )
}

export default MakeTweet;