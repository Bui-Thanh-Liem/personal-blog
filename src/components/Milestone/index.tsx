//

//
import css from "./Milestone.module.scss";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";

type propTypes = {
    number: number;
    title1: string;
    title2: string;
};

const Milestone = (props: propTypes) => {
    const { number, title1, title2 } = props;

    const darkMode = useContext(themeContext);

    const style = darkMode.state.darkMode
        ? {
              background: "black",
              color: "white",
          }
        : {};

    return (
        <div className={css["milestone-container"]}>
            <span className={css.number}>
                {number} 
                <span>+</span>
            </span>
            <p style={style} className={css.title1}>{title1}</p>
            <p className={css.title2}>{title2}</p>
        </div>
    );
};

export default Milestone;
