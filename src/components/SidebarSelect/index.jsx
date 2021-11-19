import React from 'react'
import './styles.css';

const SidebarSelect = (props) => {

    // Pass the prop actions
    const {active, text, Icon} = props;

    return (
        <div className={`sidebarSelect ${active && "sidebarSelectActive"}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarSelect