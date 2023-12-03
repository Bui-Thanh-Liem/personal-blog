//
import { Container, Row, Col } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Link } from "react-scroll";
import { AnimationControls, motion } from "framer-motion";
import classNames from "classnames/bind";

//
import Toggle from "../Toggle";
import css from "./Navbar.module.scss";
import { useState, useEffect, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";

type propTypes = {
    boxShadow: AnimationControls;
};

const cx = classNames.bind(css);

const Navbar = (props: propTypes) => {
    const { boxShadow } = props;
    const [scrollHeight, setScrollHeight] = useState<number>(0);

    useEffect(() => {
       document.addEventListener("scroll", () => {
            setScrollHeight(Math.floor(window.scrollY))   
       })
    })

    const darkMode = useContext(themeContext);
    const style = darkMode.state.darkMode
        ? {
              background: "black",
              color: "white",
          }
        : {};

    return (
        <motion.div
            animate={boxShadow}
            style={style}
            className={css["nav-container"]}
        >
            <Container className={css["nav-inner"]}>
                <Row>
                    <Col lg={3} className={css["nav-left"]}>
                        <a href="#top">
                            <div style={style} className={css["nav-name"]}>
                                LiemDev
                            </div>
                        </a>
                        <div className={css["nav-toggle"]}>
                            <Toggle />
                        </div>
                        <div
                            className={css["nav-list-icon"]}
                        >
                            <List />
                        </div>
                    </Col>
                    <Col
                        lg={9}
                        sm={0}
                        className={css["nav-right"]}
                    >
                        <ul className={css["nav-list"]}>
                            <li className={cx("nav-list-item", {"active": scrollHeight < 600 })}>
                                <a style={style} href="#top">
                                    Home
                                </a>
                            </li>
                            <li className={cx("nav-list-item", {"active": scrollHeight > 600 && scrollHeight < 1562 })}>
                                <Link to="Services" style={style}>
                                    Services
                                </Link>
                            </li>
                            <li className={cx("nav-list-item", {"active": scrollHeight > 1562 && scrollHeight < 2668 })}>
                                <Link to="Experience" style={style} href="">
                                    Experience
                                </Link>
                            </li>
                            <li className={cx("nav-list-item", {"active": scrollHeight > 2668 && scrollHeight < 3500 })}>
                                <Link to="Projects" style={style} href="">
                                    Projects
                                </Link>
                            </li>
                            <li className={cx("nav-list-item", {"active": scrollHeight > 3500 && scrollHeight < 4342 })}>
                                <Link to="About" style={style} href="">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <Link to="Contact" className={css["nav-button"]}>
                                Contact me
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default Navbar;
