//
import css from "./Toggle.module.scss";
import { Sun, Moon } from "react-bootstrap-icons";
import { useContext } from "react";
import {themeContext} from "../../context/ThemeContext";

//

const Toggle = () => {

    const darkMode = useContext(themeContext);

    const handleToggleClick = () => {
        darkMode.dispatch({type: "toggle"})
    }
    
    return (
        <div onClick={handleToggleClick} className={css["toggle-container"]}>
            <Moon color="yellow" />
            <Sun color="yellow" />
            <div
                style={darkMode.state.darkMode ? {right: 0} : {left: 0}}
                className={css["btn"]}
            ></div>
        </div>
    )
}

export default Toggle;