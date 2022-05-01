import { GameStyles } from "../styles/GameStyles";
import { css } from "aphrodite";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";

export default function Computer(props){

    const { savedGame } = useContext(Context);
    const { enteredComputer } = props;
    const [subject, setSubject] = useState(null)

    useEffect(() => {
        switch(savedGame.night){
            case "1":
                setSubject("Math")
                break;
            case "2":
                setSubject("Science")
                break;
            case "3":
                setSubject("English")
                break;
            case "4":
                setSubject("History")
                break;
            case "5":
                setSubject("Geography")
                break;
            default:return;
        }
    },[savedGame.night])

    return(
        <div className={css([GameStyles.computer, enteredComputer ? "" : GameStyles.computerHide])}>
            <div className={css(GameStyles.computerTopbar)}>
                <h4>12:00 AM</h4>
                {savedGame.night === "1" ? <p>Hold Q to look BEHIND YOU, Press R to Exit Computer</p> : ""}
            </div>

            <div className={css(GameStyles.computerDownload)}>
                <h3>Download {subject} Assignment</h3>
                <br/>
                <button className={css(GameStyles.downloadButton)}>Download</button>
            </div>

        </div>
    )
}