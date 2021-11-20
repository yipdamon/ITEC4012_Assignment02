import React from 'react';
import { Button } from '../Button';

import './styles.css';

export const FollowUser = () => {

    return(
        <div className="itemTwo">
            <div className="oneHeader">
                <h3>Who to follow</h3>
            </div>

            {/* Person 1 */}
            <div className="followPerson">
                <div className="followAvatar">
                    <img src ="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="profile avatar"/>
                </div>
                    <div className="followUser">
                        <h3>Damon Yip </h3>
                        <h4>@yipdamon</h4>
                    </div>
                    <Button text="Follow" type="followButton" isDisabled={false} action={() => alert("You followed!")}>
                        <button>Tweet</button>
                    </Button>
            </div>

            {/* Person 2 */}
            <div className="followPerson">
                <div className="followAvatar">
                    <img src ="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="profile avatar"/>
                </div>
                    <div className="followUser">
                        <h3>Damon Yip </h3>
                        <h4>@yipdamon</h4>
                    </div>
                    <Button text="Follow" type="followButton" isDisabled={false} action={() => alert("You followed!")}>
                        <button>Tweet</button>
                    </Button>
            </div>

            {/* Person 3 */}
            <div className="followPerson">
                <div className="followAvatar">
                    <img src ="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="profile avatar"/>
                </div>
                    <div className="followUser">
                        <h3>Damon Yip </h3>
                        <h4>@yipdamon</h4>
                    </div>
                    <Button text="Follow" type="followButton" isDisabled={false} action={() => alert("You followed!")}>
                        <button>Tweet</button>
                    </Button>
            </div>
        </div>
    )
}

export default FollowUser;