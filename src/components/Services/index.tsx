//
import { Container, Row, Col } from "react-bootstrap";
import { ArrowThroughHeart } from "react-bootstrap-icons";

//
import CardSkill from "../CardSkill";
import css from "./Services.module.scss";
import glasses from "../../assets/imgs/glasses.png";
import humble from "../../assets/imgs/humble.png";
import heart from "../../assets/imgs/heartemoji.png";
import CV from "../../assets/imgs/CV.pdf";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const Services = () => {
    const darkMode = useContext(themeContext);

    const style = darkMode.state.darkMode
        ? {
              background: "black",
              color: "white",
          }
        : {};

    const transition = {
        duration: 2,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <div id="Services" className={css["service-container"]}>
            <Container className={css["service-inner"]}>
                <Row style={{ height: "100vh" }}>
                    <Col className={css["service-left"]}>
                        <h1 style={style}>
                            Service
                            <span className={css["service-name"]}>
                                Developer
                                <ArrowThroughHeart color="orange" />
                                Web
                            </span>
                        </h1>
                        <p>
                            You can see details about my service, click the
                            button below to download my CV in the simplest text
                            format.
                        </p>
                        <a href={CV} download>
                            <button className={css["service-btn"]}>
                                Download CV
                            </button>
                        </a>
                        <div
                            className={`bg-violet ${css["service-left-bg1"]}`}
                        ></div>
                    </Col>
                    <Col className={css["service-right"]}>
                        <motion.div
                            initial={{ left: "-50%" }}
                            whileInView={{ left: "48%" }}
                            transition={transition}
                            style={{ position: "absolute", left: "48%" }}
                        >
                            <CardSkill
                                thumb={glasses}
                                title="Frontend"
                                info="HTML, CSS, Javascript, Bootstrap, React JS,..."
                            />
                        </motion.div>

                        <motion.div
                            initial={{ left: "-80%" }}
                            whileInView={{ left: "-18%" }}
                            transition={transition}
                            style={{
                                position: "absolute",
                                top: "30%",
                                left: "-18%",
                            }}
                        >
                            <CardSkill
                                thumb={humble}
                                title="Backend"
                                info="Node JS, Express JS, MongoDB,..."
                            />
                        </motion.div>
                        <motion.div
                            initial={{ right: "196%" }}
                            whileInView={{ right: "136%" }}
                            transition={transition}
                            style={{
                                position: "absolute",
                                top: "58%",
                                right: "136%",
                            }}
                        >
                            <CardSkill
                                thumb={heart}
                                title="Other"
                                info="Git, npm, React-bootstrap, redux, redux-toolkit,..."
                            />
                        </motion.div>
                        <div
                            className={`bg-aqua ${css["service-right-bg"]}`}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;
