import { css } from "aphrodite"
import { GameStyles } from "../styles/GameStyles"
import { useState, useEffect } from "react";
import Computer from "./Computer";
import ComputerFan from '../audio/noises/computerfan.mp3'

export const Game = () => {

    const [computerfan] = useState(new Audio(ComputerFan));
    const [lookback, setLookBack] = useState(false)
    const [enteredComputer, setEnteredComputer] = useState(false)

    useEffect(() => {
        computerfan.currentTime = 0;
        computerfan.play();
        computerfan.addEventListener('ended', () => {
            computerfan.currentTime = 0;
            computerfan.play();
        })
        return () => {
            computerfan.pause();
            computerfan.currentTime = 0;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    document.addEventListener("keydown", (e) => {
        if(e.key === "q"){
            setLookBack(true)
        }
        if(e.key === "r"){
            setEnteredComputer(false)
        }
    })
    document.addEventListener("keyup", () => {
        setLookBack(false)
    })
    
    const enterComputer = () => {
        if(lookback)return;
        setEnteredComputer(true)
    }
    

    return(
        <div>
            <div className={css([GameStyles.container, GameStyles.backView, lookback ? "" : GameStyles.hide])}></div>
            <div onClick={enterComputer} className={css([GameStyles.container, GameStyles.mainView, lookback ? GameStyles.hide : ""])}></div>
            <Computer enteredComputer={enteredComputer}/>
        </div>
    )
}