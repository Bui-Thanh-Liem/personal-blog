//
import {Card} from "react-bootstrap";

//
import css from "./ProjectCard.module.scss";


type propType = {
    title: string;
    decs: string;
    imgUrl: string;
    linkGithub: string;
    linkDemo: string;
    className?: string;
}

const ProjectCard = (props: propType) => {
    const {title, decs, imgUrl, linkDemo, linkGithub, className} = props;
    
    return (
        <Card className={`${css["prjCard-container"]} ${className}`}>
            <img className={css["prj-img"]} src={imgUrl} alt="img project" />
            <div className={css["prjCard-overlay"]}>
                <h3 className={css["prjCard-title"]}>{title}</h3>
                <p className={css["prjCard-desc"]}>{decs}</p>
                <div>
                    <a target="_blank" className={css["prjCard-github"]} href={linkGithub}>Github</a>
                    <a target="_blank" className={css["prjCard-demo"]} href={linkDemo}>Demo</a>
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard;