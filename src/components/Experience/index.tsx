//
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

//
import Exp from "../Exp";
import css from "./Experience.module.scss";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import { DataExp } from "../../data/dataExp";

const Experience = () => {
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
        <Container id="Experience" className={css["exp-container"]}>
            <div className={css["exp-title"]}>
                <h1 style={style}>Experience</h1>
                <p>My story</p>
            </div>

            {DataExp.map((exp, index) => {
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={transition}
                    >
                        <Exp
                            title1={exp.title1}
                            title2={exp.title2}
                            time={exp.time}
                            color={exp.color}
                            info={exp.info}
                        />
                    </motion.div>
                );
            })}
        </Container>
    );
};

export default Experience;
