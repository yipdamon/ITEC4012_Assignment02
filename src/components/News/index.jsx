import React from 'react';
import { Button } from '../Button';
import FollowUser from '../FollowUser';

import './styles.css';

import SearchIcon from '@mui/icons-material/Search';

export const News = () => {


    return(
        // News Column
        <div className="newsColumn">

            {/*Search bar Section*/}
            <div className="searchBar">
                <SearchIcon className="searchIcon"/>
                <div>
                    <form className="searchTwitter">
                        <input className="searchTwitterField" placeholder="Search Twitter" type="text" name="search tweet"/>
                    </form>
                </div>
            </div>

            {/*What's happening Section*/}
            <div className="itemOne">
                <div className="oneHeader">
                    <h3>What's happening</h3>
                </div>
                <div className="oneHeaderSpecial">
                    Gaming ᛫ Trending
                </div>
                <div className="oneDescription">
                    Pokemon Brilliant Diamond and Shining Pearl are here!
                </div>
                <div className="oneHeaderSpecial">
                    eSports ᛫ Trending
                </div>
                <div className="oneDescription">
                    New Valorant Agent Chamber!
                </div>
                <div className="oneHeaderSpecial">
                    Gaming ᛫ Trending
                </div>
                <div className="oneDescription">
                    Genshin Impact rerun banners!
                </div>
            </div>

            {/*Who to follow Section*/}
            <FollowUser/>

            {/*Footer stuff Section*/}
            <div className="footer">
                <h4>Terms of Service Privacy Policy Cookie Policy</h4>
                <h4>Ads info More... @ 2021 Twitter, Inc.</h4>
            </div>
        </div>
    )
}

export default News;