import React from 'react';

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

            {/*Who to follow Section*/}

            {/*Footer stuff Section*/}
        </div>
    )
}

export default News;