import { NightCompleteStyles } from "../styles/NightCompleteStyles";
import { css } from "aphrodite";
import { useNavigate,useParams } from "react-router-dom";
import { Context } from "../Context";
import { useContext } from "react";

export const NightComplete = () => {

    const navigate = useNavigate();
    const { score } = useParams();
    const { savedGame } = useContext(Context);


    const nextNight = () => {
        if(savedGame.night === 5)return navigate("/note")
        navigate("/game")
    }

    const mainMenu = () => {
        navigate("/")
    }

    return (
        <div className={css(NightCompleteStyles.container)}>
            <h1 className={css(NightCompleteStyles.fadeIn)}>Night Complete</h1>
            <br/>
            <p className={css([NightCompleteStyles.fadeIn])}>You got {score}/20</p>
            <br/>
            <button onClick={() => mainMenu()} className={css([NightCompleteStyles.fadeIn, NightCompleteStyles.button])}>Main Menu</button>
            <button onClick={() => nextNight()} className={css([NightCompleteStyles.fadeIn, NightCompleteStyles.button])}>Continue</button>
        </div>
    )
}