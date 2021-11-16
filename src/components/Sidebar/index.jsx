import React from "react";
import './styles.css';
import SidebarSelect from "../SidebarSelect/index";

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
        <div className="sidebar">
            <TwitterIcon />

            <SidebarSelect Icon = {HomeIcon} text = "Home"/>
            <SidebarSelect Icon = {TagIcon} text = "Explore"/>
            <SidebarSelect Icon = {NotificationsNoneOutlinedIcon} text = "Notifications"/>
            <SidebarSelect Icon = {MailOutlineIcon} text = "Messages"/>
            <SidebarSelect Icon = {BookmarkBorderIcon} text = "Bookmarks"/>
            <SidebarSelect Icon = {FeaturedPlayListOutlinedIcon} text = "Lists"/>
            <SidebarSelect Icon = {PersonOutlineIcon} text = "Profile"/>
            <SidebarSelect Icon = {MoreHorizIcon} text = "More"/>
        </div>
    )
}

export default sidebar;