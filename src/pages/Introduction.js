import { css } from "aphrodite";
import { MainMenuStyles } from "../styles/MainMenuStyles";
import { useNavigate } from "react-router-dom";

export const Introduction = () => {

    const navigate = useNavigate();

    return(
        <div className={css(MainMenuStyles.container)}>
            <p className={css(MainMenuStyles.text, MainMenuStyles.intro)}>
                I'm a student. I'm lazy. Incredibly lazy. A bit too<br/>
                lazy to the point where I forgot to complete my<br/>
                assignments. I have five of them in total. I'll complete<br/>
                them one by one once it gets dark because I'm busy<br/>
                during the day. Just need to download them, answer<br/>
                the questions to complete the assignments and submit them.<br/>
                <br/>
                Shouldn't be too hard, right?
            </p>
            <br/>
            <button onClick={() => navigate("/game")} className={css(MainMenuStyles.button)}>
                GET TO WORK
            </button>
        </div>
    )
}