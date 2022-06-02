import { css } from "aphrodite"
import { GameStyles } from "../styles/GameStyles"
import { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import Computer from "./Computer";
import ComputerFan from '../audio/noises/computerfan.mp3';
import { useNavigate } from "react-router-dom";

export const Game = () => {

    const [computerfan] = useState(new Audio(ComputerFan));
    const { savedGame, setSavedGame } = useContext(Context);
    const [lookback, setLookBack] = useState(false)
    const [enteredComputer, setEnteredComputer] = useState(false)
    const [time, setTime] = useState(0)
    const navigate = useNavigate();

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

    useEffect(() => {
        const addTime = setInterval(() => {
            setTime(time => time + 1)
        },60000)
        return () => {
            clearInterval(addTime)
        }
    },[])

    useEffect(() => {
        if(time === 6){
            setSavedGame({...savedGame, night: savedGame.night + 1})
            localStorage.setItem("savedGame", JSON.stringify({...savedGame, night: savedGame.night + 1}))
            navigate("/nightcomplete")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[time])

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
            <Computer time={time} enteredComputer={enteredComputer}/>
        </div>
    )
}