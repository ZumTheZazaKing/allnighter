import { Context } from "../Context";
import { useContext, useEffect, useState, useRef } from "react";
import { css } from "aphrodite";
import { NoteStyles } from "../styles/NoteStyles";
import { useNavigate } from "react-router-dom";
import NotePass from '../images/notepass.png';
import NoteFail from '../images/notesfail.png';

export const Note = () => {

    const { savedGame, setSavedGame } = useContext(Context);
    const [gracePeriod, setGracePeriod] = useState(true)
    const image = useRef()
    const navigate = useNavigate();

    useEffect(() => {
        if(savedGame.math < 15 || savedGame.science < 15 || savedGame.english < 15 || savedGame.history < 15 || savedGame.geography < 15){
            setSavedGame({...savedGame, failed: true})
            localStorage.setItem("savedGame", JSON.stringify({...savedGame, failed: true}))
        }
        setTimeout(() => {
            setGracePeriod(false)
        },5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const next = () => {
        image.current.style.opacity = 0;
        if(savedGame.failed){
            setSavedGame({...savedGame, night: savedGame.night + 1})
            localStorage.setItem("savedGame", JSON.stringify({...savedGame, night: savedGame.night + 1}))
            setTimeout(() => navigate("/"),5000)
        }else{
            setSavedGame({...savedGame, geography: 0})
            localStorage.setItem("savedGame", JSON.stringify({...savedGame, geography: 0}))
            setTimeout(() => navigate("/"),5000)
        }
    }

    return (
        <div onClick={gracePeriod ? () => {return} : () => next()} className={css(NoteStyles.container)}>
            <img ref={image} className={css(NoteStyles.image)} alt="If you're seeing this message, something's wrong" src={savedGame.failed ? NoteFail : NotePass}/>
        </div>
    )
}