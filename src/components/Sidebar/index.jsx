import React from "react";
import './styles.css';
import SidebarSelect from "../SidebarSelect/index";
import { Button } from '../Button';

import {
    NavLink
} from 'react-router-dom'

// Icon imports
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const sidebar = () => {
    return (
        // All the sidebar items, button at end for tweet button
        <nav className="sidebar">
                <TwitterIcon className="twitterIcon"/>

                    {/* Switch to Homepage */}
                    <NavLink to="/" activeClassName="navSelected">
                        <SidebarSelect Icon = {HomeIcon} text = "Home"/>
                    </NavLink>

                    <SidebarSelect Icon = {TagIcon} text = "Explore"/>

                    {/* Switch to Notifications page */}
                    <NavLink to="/notifications" activeClassName="navSelected">
                        <SidebarSelect Icon = {NotificationsNoneOutlinedIcon} text = "Notifications"/>
                    </NavLink>

                        <SidebarSelect Icon = {MailOutlineIcon} text = "Messages"/>
                        <SidebarSelect Icon = {BookmarkBorderIcon} text = "Bookmarks"/>
                        <SidebarSelect Icon = {FeaturedPlayListOutlinedIcon} text = "Lists"/>
                        <SidebarSelect Icon = {PersonOutlineIcon} text = "Profile"/>
                        <SidebarSelect Icon = {MoreHorizIcon} text = "More"/>
                        <Button text="Tweet" type="tweetSidebar" isDisabled={false} action={() => alert("Popup modal dialogue for Tweet goes here")} />
        </nav>
    )
}

export default sidebar;