//
import {
    Container,
    Row,
    Col,
    Form,
    FloatingLabel,
    Button,
} from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { FormEventHandler, RefObject, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

//
import css from "./Contact.module.scss";
import programmer1 from "../../assets/imgs/programer1.jpg";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";

const Contact = () => {
    const darkMode = useContext(themeContext);

    const style = darkMode.state.darkMode
        ? {
              background: "black",
              color: "white",
          }
        : {};

    const [user, setUser] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [done, setDone] = useState<boolean>(false);

    const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement | null>(
        null
    );

    const sendEmail: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                "service_5rg1c2f",
                "template_pm8qgcs",
                form.current as unknown as string,
                "LUjWK1C044ysgpw0T"
            )
            .then((res) => {
                console.log(res.text);
                setDone(true);
            })
            .catch((err) => {
                console.log(err.text);
                setDone(false);
            });
    };

    useEffect(() => {
        if (done) {
            setUser("");
            setEmail("");
            setMessage(""); 
        }
    },[done])

    return (
        <Container id="Contact" className={css["contact-container"]}>
            <div className={css["contact-title"]}>
                <h1 style={style}>Contact Me</h1>
                <p>
                    Please send me what you want by and this is the simplest
                    way.
                    <ArrowRight color="orange" />
                    <br />
                    Thank you🤩🤩🤩
                </p>
            </div>
            <Row className={css["contact-inner"]}>
                <Col className={css["contact-left"]}>
                    <img
                        className={css["contact-img"]}
                        src={programmer1}
                        alt=""
                    />
                </Col>
                <Col className={css["contact-right"]}>
                    <div className={`${css["contact-bg-right"]} bg-aqua`}></div>
                    <Form ref={form} action="" onSubmit={sendEmail}>
                        <FloatingLabel
                            controlId="user"
                            label="User name..."
                            className="mb-3"
                        >
                            <Form.Control
                                name="user_name"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                type="text"
                                placeholder="User name..."
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="email"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                name="user_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="message" label="Message">
                            <Form.Control
                                as="textarea"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                name="message"
                                placeholder="Message..."
                                style={{ height: "100px" }}
                            />
                        </FloatingLabel>

                        <Button
                            disabled={email.length > 0 ? false : true}
                            type="submit"
                            className={css["contact-btn-submit"]}
                        >
                            Send
                        </Button>
                        {done && <div>Thank you for contacting me!</div>}
                    </Form>                    
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
