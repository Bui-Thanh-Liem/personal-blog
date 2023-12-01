//
import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";

//
import classNames from "classnames/bind";
import css from "./Exp.module.scss";

type propTypes = {
    title1: string;
    title2: string;
    time: string;
    info: string;
    color: string;
};

const cx = classNames.bind(css);

const Exp = (props: propTypes) => {
    const { title1, title2, time, info, color } = props;

    const darkMode = useContext(themeContext);

    const style = darkMode.state.darkMode
        ? {
              background: "black",
              color: "white",
          }
        : {};

    return (
        <Row
            className={cx("exp-container", {
                [color]: color,
            })}
        >
            <Col className={cx("exp-left")}>
                <h3 style={style} className={css["exp-title"]}>
                    {title1}
                </h3>
                <p className={css["exp-text"]}>{time}</p>
            </Col>
            <Col>
                <h3 style={style} className={css["exp-title"]}>
                    <span
                        className={cx("exp-circle", {
                            [color]: color,
                        })}
                    ></span>
                    {title2}
                </h3>
                <p className={css["exp-text"]}>{info}</p>
            </Col>
        </Row>
    );
};

export default Exp;
