//
import { Card } from "react-bootstrap";

//
import css from "./CardSkill.module.scss";

type propTypes = {
    thumb: string;
    title: string;
    info: string;
}

const CardSkill = (props: propTypes) => {
    const {thumb, title, info} = props;
    
    return (
        <Card className={css["card-container"]}>
            <img src={thumb} alt="" />
            <h3>{title}</h3>
            <p>{info}</p>
            <button>Learn more</button>
        </Card>
    )
}

export default CardSkill;