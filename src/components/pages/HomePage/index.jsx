import "./styles.css";

import Sidebar from "../../Sidebar";
import Feed from "../../Feed";
import News from "../../News";

export const HomePage = () => {

    return (
        // Homepage with homepage components
        <div className="homePage">
            <Sidebar/>
            <Feed/>
            <News/>
        </div>
    )
}