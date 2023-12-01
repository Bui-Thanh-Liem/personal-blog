//

//
import css from "./Floating.module.scss";

type propType = {
    text1: string;
    text2: string;
    thumb: string;
};

const Floating = (prop: propType) => {
    const { text1, text2, thumb } = prop;

    return (
        <div className={css["floating-container"]}>
            <img src={thumb} alt="" />
            <div>
                <span style={{fontWeight: "bold"}}>{text1}</span>
                <br />
                <span>{text2}</span>
            </div>
        </div>
    );
};

export default Floating;
