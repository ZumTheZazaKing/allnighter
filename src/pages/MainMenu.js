import { css } from "aphrodite";
import { MainMenuStyles } from "../styles/MainMenuStyles";
import { useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";

export const MainMenu = () => {

    const { savedGame, setSavedGame } = useContext(Context);
    const navigate = useNavigate();

    const newGame = () => {
        if(window.innerWidth < 800 || window.innerHeight < 600 || 
            window.innerWidth > 1000 || window.innerHeight > 700){
            return alert("Reload the page");
        }
        const confirmation = window.confirm("Start a new game?");
        if(!confirmation)return;

        navigate("/intro")
        let newGameData = {
            night:1,
            failed:false,
            math:0,
            science:0,
            english:0,
            history:0,
            geography:0,
        }
        setSavedGame(newGameData);
        localStorage.setItem("savedGame", JSON.stringify(newGameData));
    }

    const loadGame = () => {
        if(window.innerWidth < 800 || window.innerHeight < 600 || 
            window.innerWidth > 1000 || window.innerHeight > 700){
            return alert("Reload the page");
        }
        const confirmation = window.confirm(`Continue from Night ${savedGame.night}?`);
        if(!confirmation)return;

        if(savedGame.night === 1){
            navigate("/intro")
        }else{
            navigate("/game")
        }
    }

    return (
        <div className={css(MainMenuStyles.container)}>
            <h1 className={css(MainMenuStyles.text)}>All-Nighter</h1>
            <br/><br/>
            <button className={css(MainMenuStyles.button)} onClick={() => newGame()}>NEW GAME</button>
            <button 
                className={css([MainMenuStyles.button, !savedGame ? MainMenuStyles.disabled : ""])} 
                disabled={!savedGame}
                onClick={() => loadGame()}
            >
                LOAD GAME
            </button>
            {savedGame ? <span style={{color:"grey"}}>Night {savedGame.night}</span> : ""}
        </div>
    );
}