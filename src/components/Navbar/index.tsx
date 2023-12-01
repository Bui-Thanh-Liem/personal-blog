//
import { Container, Row, Col } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Link } from "react-scroll";
import { AnimationControls, motion } from "framer-motion";

//
import Toggle from "../Toggle";
import css from "./Navbar.module.scss";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";

type propTypes = {
    boxShadow: AnimationControls;
};

const Navbar = (props: propTypes) => {
    const { boxShadow } = props;

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
                            <li className={css["nav-list-item"]}>
                                <a style={style} href="#top">
                                    Home
                                </a>
                            </li>
                            <li className={css["nav-list-item"]}>
                                <Link to="Services" style={style}>
                                    Services
                                </Link>
                            </li>
                            <li className={css["nav-list-item"]}>
                                <Link to="Experience" style={style} href="">
                                    Experience
                                </Link>
                            </li>
                            <li className={css["nav-list-item"]}>
                                <Link to="Projects" style={style} href="">
                                    Projects
                                </Link>
                            </li>
                            <li className={css["nav-list-item"]}>
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
