import React from 'react'
import './styles.css';

const SidebarSelect = (props) => {

    // Pass the prop actions
    const {text, Icon} = props;

    return (
        // Sidebar with icon and text
        <div className="sidebarSelect" activeClassName="navSelected">
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarSelect