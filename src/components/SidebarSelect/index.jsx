import React from 'react'
import './styles.css';

const SidebarSelect = (props) => {

    // Pass the prop actions
    const {text, Icon} = props;

    return (
        <div className="sidebarSelect">
            <Icon/>
            <h2>{text}</h2>

        </div>
    )
}

export default SidebarSelect