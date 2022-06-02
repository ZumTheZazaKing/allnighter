import { GameOverStyles } from "../styles/GameOverStyles";
import { css } from "aphrodite";
import { useNavigate } from "react-router-dom";

export const GameOver = () => {

    const navigate = useNavigate();

    const mainMenu = () => {
        navigate("/")
    }

    return(
        <div className={css(GameOverStyles.container)}>
            <h1>GAME OVER</h1>
            <br/>
            <p onClick={() => mainMenu()} className={css(GameOverStyles.button)}>Return</p>
        </div>
    )
}