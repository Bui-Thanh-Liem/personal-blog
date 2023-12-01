//
import { Container, Row, Col } from "react-bootstrap";
import {
    CalendarWeek,
    Telephone,
    Mailbox,
    GeoAlt,
} from "react-bootstrap-icons";
import { useContext } from "react";
import { motion } from "framer-motion";

//
import css from "./About.module.scss";
import { themeContext } from "../../context/ThemeContext";
import me from "../../assets/imgs/me.jpg";

const About = () => {
    const darkMode = useContext(themeContext);

    const style = darkMode.state.darkMode
        ? {
              background: "black",
              color: "white",
          }
        : {};

    const transition = {
        duration: 2.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <Container id="About" className={css["about-container"]}>
            <div className={css["about-title"]}>
                <h1 style={style}>About Me</h1>
                <p>Know more about me</p>
            </div>

            <Row className={css["about-inner"]}>
                <Col lg={6} sm={12} className={css["about-left"]}>
                    <motion.div
                        initial={{ translateX: "-100%", opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={transition}
                    >
                        <div
                            className={`${css["about-bg-left"]} bg-violet`}
                        ></div>

                        <img className={css["about-img"]} src={me} alt="me" />
                    </motion.div>
                </Col>
                <Col className={css["about-right"]}>
                    <motion.div
                        initial={{ translateX: "100%", opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={transition}
                    >
                        <div
                            className={`${css["about-bg-right"]} bg-aqua`}
                        ></div>

                        <div>
                            <p>Hi everybody, I am </p>
                            <h1 style={style}>Bùi Thanh Liêm</h1>
                            <p>
                                I am a recent graduate majoring in website
                                programming. My biggest dream is to become a
                                talented programmer so I can do many cool things
                                in the Internet World, such as hacking
                                Google😂😂😂.
                            </p>
                            <ul className={css["list-identity"]}>
                                <li>
                                    <CalendarWeek
                                        color={
                                            darkMode.state.darkMode
                                                ? "white"
                                                : ""
                                        }
                                    />
                                    <span>08-01-2000</span>
                                </li>
                                <li>
                                    <a href="tel:0375255073">
                                        <Telephone
                                            color={
                                                darkMode.state.darkMode
                                                    ? "white"
                                                    : ""
                                            }
                                        />
                                        0375255073
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:buithanhliem5073@gmail.com">
                                        <Mailbox
                                            color={
                                                darkMode.state.darkMode
                                                    ? "white"
                                                    : ""
                                            }
                                        />
                                        buithanhliem5073@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.google.com/maps/place/H%E1%BB%93+Ch%C3%AD+Minh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7552929,106.365562,10z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg?hl=vi-VN&entry=ttu"
                                    >
                                        <GeoAlt
                                            color={
                                                darkMode.state.darkMode
                                                    ? "white"
                                                    : ""
                                            }
                                        />
                                        Ho Chi Minh City, Vietnam
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
