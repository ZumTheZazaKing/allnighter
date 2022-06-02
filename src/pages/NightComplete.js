import { NightCompleteStyles } from "../styles/NightCompleteStyles";
import { css } from "aphrodite";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import { useContext } from "react";

export const NightComplete = () => {

    const navigate = useNavigate();
    const { savedGame } = useContext(Context);
    let subjectScore;

    switch(savedGame.night){
        case 1:
            subjectScore = savedGame.math;
            break;
        case 2:
            subjectScore = savedGame.science;
            break;
        case 3:
            subjectScore = savedGame.english;
            break;
        case 4:
            subjectScore = savedGame.history;
            break;
        case 5:
            subjectScore = savedGame.geography;
            break;
        default:return;
    }

    const nextNight = () => {
        navigate("/game")
    }

    const mainMenu = () => {
        navigate("/")
    }

    return (
        <div className={css(NightCompleteStyles.container)}>
            <h1 className={css(NightCompleteStyles.fadeIn)}>Night Complete</h1>
            <br/>
            <p className={css([NightCompleteStyles.fadeIn])}>You got {subjectScore}/10</p>
            <br/>
            <button onClick={() => mainMenu()} className={css([NightCompleteStyles.fadeIn, NightCompleteStyles.button])}>Main Menu</button>
            <button onClick={() => nextNight()} className={css([NightCompleteStyles.fadeIn, NightCompleteStyles.button])}>Continue</button>
        </div>
    )
}