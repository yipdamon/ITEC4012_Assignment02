import React from 'react';

import './styles.css';

import NotificationPosts from '../NotificationPosts';

export const Notifications = () => {

    return(
        <div className="notifications">
            {/* Header */}
            <div className="notiHeader">
                <h2>Notifications</h2>
            </div>

            {/* Notifications */}
            <NotificationPosts />
            <NotificationPosts />
            <NotificationPosts />
            <NotificationPosts />
            <NotificationPosts />
            <NotificationPosts />
            <NotificationPosts />
            <NotificationPosts />
            <NotificationPosts />
            <NotificationPosts />
            

        </div>
    )
}

export default Notifications;