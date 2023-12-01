//
import { Container, Row, Col } from "react-bootstrap";
import { Github, Instagram, Twitter } from "react-bootstrap-icons";

//
import css from "./Info.module.scss";
import bgr1 from "../../assets/imgs/Vector1.png";
import me from "../../assets/imgs/me.jpg";
import crown from "../../assets/imgs/crown.png";
import like from "../../assets/imgs/thumbup.png";
import icon_glasses from "../../assets/imgs/glassesimoji.png";
import Floating from "../Floating";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../../context/ThemeContext";

import { motion } from "framer-motion";

const Info = () => {
    const darkMode = useContext(themeContext);
    const style = darkMode.state.darkMode
        ? { background: "black", color: "white" }
        : {};

    const transition = {
        duration: 2,
        ease: [0, 0.71, 0.2, 1.01],
    };

    
    const [name, setName] = useState<string>("")
    useEffect(() => {
        let indexName: number = 0;
        let isUp: boolean = true;
        const text:string = "Website Developer";
        
        setInterval(() => {
            if (isUp) {
                indexName++;
                // eslint-disable-next-line react-hooks/exhaustive-deps
                isUp = indexName === text.length ? false : true;
            } else {
                indexName--;
                isUp = indexName === 1 ? true : false;
            }
    
            setName(text.substring(0, indexName));
            
        }, 100)

    }, []);

    return (
        <div className={css["info-container"]}>
            <Container className={css["info-inner"]}>
                <Row>
                    <Col lg={6} sm={12} className={css["info-left"]}>
                        <h1 style={style}>Hello! I'm</h1>
                        <h1 className={css["info-name"]}>
                            {name}
                        </h1>
                        <p>
                            As a passionate Computer Science student at ITC
                            college, I have spent the last two years honing my
                            skills in HTML, CSS, JavaScript, bootstrap, Node js,
                            MongoDB, with a special focus on React JS . I
                            believe my strong skills and creativity make me an
                            excellent candidate for this role.
                        </p>
                        <button className={css["info-btn"]}>Here me</button>

                        <div className={css["icon-container"]}>
                            <a
                                target="_blank"
                                href="https://github.com/Bui-Thanh-Liem"
                            >
                                <Github
                                    color={
                                        darkMode.state.darkMode ? "white" : ""
                                    }
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/bui_thanh_liem8120/"
                            >
                                <Instagram color="orange" />
                            </a>
                            <a
                                target="_blank"
                                href="https://twitter.com/Bui_Thanh_Liem"
                            >
                                <Twitter color="#01dbea" />
                            </a>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} className={css["info-right"]}>
                        <div className={`${css["bg1"]} bg-violet`}></div>
                        <div className={`${css["bg2"]} bg-aqua`}></div>
                        <img className={css.img} src={bgr1} alt="" />

                        <img
                            className={`${css.img} ${css["img-me"]}`}
                            src={me}
                            alt=""
                        />
                        <motion.div
                            initial={{ rotateX: -180 }}
                            whileInView={{ rotateX: 0 }}
                            transition={transition}
                            style={{
                                position: "absolute",
                                top: "-8%",
                                left: "68%",
                            }}
                        >
                            <Floating
                                text1={"Frontend"}
                                text2={"Developer"}
                                thumb={crown}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ rotateX: -180 }}
                            whileInView={{ rotateX: 0 }}
                            transition={transition}
                            style={{
                                position: "absolute",
                                left: "-8%",
                                bottom: "36%",
                            }}
                        >
                            <Floating
                                text1={"Backend"}
                                text2={"Developer"}
                                thumb={like}
                            />
                        </motion.div>
                        <motion.img
                            initial={{ left: "-40%" }}
                            whileInView={{ left: "-30%" }}
                            transition={transition}
                            className={css["info-icon"]}
                            src={icon_glasses}
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Info;
