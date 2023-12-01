//
import { Container, Row, Col } from "react-bootstrap";
import {
    Github,
    Instagram,
    Facebook,
    Twitter,
    Mailbox2,
} from "react-bootstrap-icons";

//
import css from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={css["footer-container"]}>
            <Container className={css["footer-inner"]}>
                <Row className={css["footer-row-top"]}>
                    <Col className={css["footer-left"]}>
                        <a  href="#top" style={{ display: "inline-block" }}>
                            <h1 className={css["footer-logo"]}>LiemDev</h1>
                        </a>
                    </Col>
                    <Col className={css["footer-right"]}>
                        <a className={css["link-item"]} href="https://github.com/Bui-Thanh-Liem">
                            <Github color="white" className={css["icon"]} />
                        </a>

                        <a className={css["link-item"]} href="https://www.instagram.com/bui_thanh_liem8120/">
                            <Instagram color="white" className={css["icon"]} />
                        </a>

                        <a className={css["link-item"]} href="https://www.facebook.com/profile.php?id=100010395697006&locale=vi_VN">
                            <Facebook color="white" className={css["icon"]} />
                        </a>

                        <a className={css["link-item"]} href="https://twitter.com/Bui_Thanh_Liem">
                            <Twitter color="white" className={css["icon"]} />
                        </a>

                        <a className={css["link-item"]} href="mailto:buithanhliem5073@gmail.com">
                            <Mailbox2 color="white" className={css["icon"]} />
                        </a>
                    </Col>
                </Row>
                <Row className={css["footer-row-top"]}>
                    <Col>
                        <p>&copy; - 2023 - Bùi Thanh Liêm</p>
                    </Col>
                    <Col>
                        <p>Thank you for visiting my personal page❤️❤️❤️</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
