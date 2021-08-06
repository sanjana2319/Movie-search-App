import { unavailable } from "../../config/config";
import "./Content.css";
import Search from "../../Pages/Search/Search";
const Content = () => ({
    id,
    poster,
    title
}) => {
    return(
        <div className = "media">
            <img className = "poster" src = {unavailable}/>
            <b classname = "title">{title}</b>
        </div>
    );
};

export default Content