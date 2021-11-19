import React from 'react';
import { useForm } from 'react-hook-form';

import './styles.css';
import { Button } from '../Button';

export const MakeTweet = () => {

    return(
        <div className="MakeTweet">
            
            <form className="formLayout">
                <input className="tweetField" placeholder="What's happening?" type="text" name="tweet"/>
            </form>
                <Button text="Tweet" type="tweetButton" isDisabled={true} action={() => alert("You posted a tweet!")}>
                    <button>Tweet</button>
                </Button>
        </div>
    )
}

export default MakeTweet;