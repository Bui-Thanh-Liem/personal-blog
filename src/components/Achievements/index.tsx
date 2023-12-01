//
import { Container, Row, Col } from "react-bootstrap";

//
import Milestone from "../Milestone";
import css from "./Achievements.module.scss";


const Achievements = () => {    
    return (
        <Container className={css["achievement-container"]}>
            <Row className={css["achievement-inner"]}>
                <Col lg={6}>
                    <Milestone number={2} title1="yesrs of" title2="Study" />
                    <Milestone number={8} title1="completed" title2="Projects" />
                    <Milestone number={1} title1="College" title2="Student" />
                </Col>
            </Row>  
        </Container>
    );
};

export default Achievements;
