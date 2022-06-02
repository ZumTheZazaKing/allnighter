import { GameStyles } from "../styles/GameStyles";
import { css } from "aphrodite";
import { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../Context";
import Homework from '../data.json'

export default function Computer(props){

    const { savedGame } = useContext(Context);
    const { enteredComputer, time } = props;
    const [subject, setSubject] = useState("")
    const [homework, setHomework] = useState(null)
    const [downloadPercentage, setDownloadPercentage] = useState(null)

    const downloadRef = useRef()

    useEffect(() => {
        switch(savedGame.night){
            case 1:
                setSubject("math")
                setHomework(Homework.math)
                break;
            case 2:
                setSubject("science")
                setHomework(Homework.science)
                break;
            case 3:
                setSubject("english")
                setHomework(Homework.english)
                break;
            case 4:
                setSubject("history")
                setHomework(Homework.history)
                break;
            case 5:
                setSubject("geography")
                setHomework(Homework.geography)
                break;
            default:return;
        }
    },[savedGame.night])

    const downloadAssignment = () => {
        const downloading = setInterval(() => {
            setDownloadPercentage(downloadPercentage => downloadPercentage + 1)
        },300)
        const done = setTimeout(() => {
            clearInterval(downloading)
            clearTimeout(done)
        },30000)
    }

    return(
        <div className={css([GameStyles.computer, enteredComputer ? "" : GameStyles.computerHide])}>
            <div className={css(GameStyles.computerTopbar)}>
                <h4>{time === 0 ? "12" : time}:00 AM</h4>
                {savedGame.night === "1" ? <p>Hold Q to look BEHIND YOU, Press R to Exit Computer</p> : ""}
            </div>

            <div className={css(GameStyles.computerDownload)}>
                <h3>Download {subject.charAt(0).toUpperCase() + subject.slice(1)} Assignment</h3>
                <br/>
                {downloadPercentage === 100 ?
                <button className={css(GameStyles.downloadButton)}>Take Quiz</button> :
                <button ref={downloadRef} onClick={() => downloadAssignment()} className={css(GameStyles.downloadButton)}>
                    {downloadPercentage === null ? "Download" : `${downloadPercentage}%`}
                </button>}
            </div>

        </div>
    )
}