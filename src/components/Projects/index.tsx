//
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { useContext } from "react";
import { motion } from "framer-motion";

//
import ProjectCard from "../ProjectCard";
import "./Projects.scss";
import { dataPratice, dataPro } from "../../data/dataPratice";
import { themeContext } from "../../context/ThemeContext";

const Projects = () => {
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
        <Container id="Projects" className="project-container">
            <div className={`${"project-bg1"} bg-aqua`}></div>
            <div className={`${"project-bg2"} bg-violet`}></div>

            <div className="project-title">
                <h1 style={style}>My Projects</h1>
                <p>Starting...</p>
            </div>

            <Row>
                <Col className="project-inner">
                    <Tab.Container defaultActiveKey="pratices">
                        {/* Actions */}
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link style={style} eventKey="pratices">
                                    Pratices
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={style} eventKey="projects">
                                    Projects
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        {/* Contents */}
                        <Tab.Content>
                            <Tab.Pane eventKey="pratices">
                                <div className="projectCard-container">
                                    {dataPratice.map((item, index) => (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={transition}
                                            key={index}
                                            className="projectCard-item"
                                        >
                                            <ProjectCard
                                                className={"projectCard-item"}
                                                title={item.title}
                                                decs={item.decs}
                                                imgUrl={item.imgUrl}
                                                linkGithub={item.linkGithub}
                                                linkDemo={item.linkDemo}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="projects">
                                <div className="projectCard-container">
                                    {dataPro.map((item, index) => (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={transition}
                                            key={index}
                                            className="projectCard-item"
                                        >
                                            <ProjectCard
                                                className={"projectCard-item"}
                                                title={item.title}
                                                decs={item.decs}
                                                imgUrl={item.imgUrl}
                                                linkGithub={item.linkGithub}
                                                linkDemo={item.linkDemo}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;
