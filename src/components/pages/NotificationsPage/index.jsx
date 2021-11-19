import "./styles.css";

import Sidebar from "../../Sidebar";
import Notifications from "../../Notifications";
import News from "../../News";

export const NotificationsPage = () => {

    return (
        <div className="notiPage">
            <Sidebar/>
            <Notifications/>
            <News/>
        </div>
    )
}