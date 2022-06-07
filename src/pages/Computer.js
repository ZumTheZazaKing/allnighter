import { GameStyles } from "../styles/GameStyles";
import { css } from "aphrodite";
import { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../Context";
import Homework from '../data.json'
import { useNavigate } from "react-router-dom";
import Wifi from '../images/wifi.png';
import NoWifi from '../images/nowifi.png';
import DigitalPress from '../audio/soundeffects/digitalPress.mp3';

export default function Computer(props){

    const [digitalpress] = useState(new Audio(DigitalPress));
    const { savedGame, setSavedGame } = useContext(Context);
    const { enteredComputer, time, network } = props;
    const [subject, setSubject] = useState("")
    const [homework, setHomework] = useState(null)
    const [downloadPercentage, setDownloadPercentage] = useState(null)
    const [uploadPercentage, setUploadPercentage] = useState(null)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [rightAnswers, setRightAnswers] = useState(0)
    const [processing, setProcessing] = useState(false);
    const [unlucky, setUnlucky] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const navigate = useNavigate();

    const downloadButton = useRef()
    const downloadSection = useRef();
    const uploadButton = useRef();
    const quizSection = useRef();
    const uploadSection = useRef();

    useEffect(() => {
        setUnlucky(Boolean(Math.round(Math.random())))
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
        digitalpress.currentTime = 0;
        digitalpress.play();
        digitalpress.onended = () => {digitalpress.remove()}
        if(!network){
            setShowWarning(true)
            setTimeout(() => setShowWarning(false), 1000);
            return;
        }
        downloadButton.current.disabled = true;
        const downloading = setInterval(() => {
            setDownloadPercentage(downloadPercentagee => downloadPercentagee + 1)
        },300)
        if(!unlucky){
            const done = setTimeout(() => {
                clearInterval(downloading)
                clearTimeout(done)
                downloadButton.current.disabled = false;
            },30000)
        }else{
            const done = setTimeout(() => {
                clearInterval(downloading)
                const smugDone = setTimeout(() => {
                    clearTimeout(done)
                    clearTimeout(smugDone)
                    setDownloadPercentage(downloadPercentagee => downloadPercentagee + 1)
                    downloadButton.current.disabled = false;
                },15000)
            },29700)
        }
    }

    const takeQuiz = () => {
        digitalpress.currentTime = 0;
        digitalpress.play();
        digitalpress.onended = () => {digitalpress.remove()}
        downloadSection.current.style.display = "none";
        quizSection.current.style.display = "block";
    }

    const nextQuestion = (e) => {
        digitalpress.currentTime = 0;
        digitalpress.play();
        digitalpress.onended = () => {digitalpress.remove()}
        if(!network){
            setShowWarning(true)
            setTimeout(() => setShowWarning(false), 1000);
            return;
        }
        if(e.target.innerHTML === String(homework[questionIndex].answer)){
            setRightAnswers(rightAnswers => rightAnswers + 1)
        }
        if(questionIndex < homework.length - 1){
            setProcessing(true)
            setTimeout(() => {
                setQuestionIndex(questionIndex => questionIndex + 1)
                setProcessing(false)
            },1000)
        }else{
            setProcessing(true)
            setTimeout(() => {
                quizSection.current.style.display = "none";
                uploadSection.current.style.display = "block";
                setProcessing(false)
            },1000)
        }
    }

    const submitAssignment = () => {
        digitalpress.currentTime = 0;
        digitalpress.play();
        digitalpress.onended = () => {digitalpress.remove()}
        if(!network){
            setShowWarning(true)
            setTimeout(() => setShowWarning(false), 1000);
            return;
        }
        uploadButton.current.disabled = true;
        const uploading = setInterval(() => {
            setUploadPercentage(uploadPercentagee => uploadPercentagee + 1)
        },300)
        const done = setTimeout(() => {
            clearInterval(uploading)
            clearTimeout(done)
            uploadButton.current.disabled = false;
        },30000)
    }

    const shutdown = () => {
        digitalpress.currentTime = 0;
        digitalpress.play();
        
        switch(subject){
            case "math":
                setSavedGame({...savedGame, night: savedGame.night + 1, math: savedGame.math + rightAnswers})
                localStorage.setItem("savedGame", JSON.stringify({...savedGame, night: savedGame.night + 1, math: savedGame.math + rightAnswers}))   
                break;
            case "science":
                setSavedGame({...savedGame, night: savedGame.night + 1, science: savedGame.science + rightAnswers})
                localStorage.setItem("savedGame", JSON.stringify({...savedGame, night: savedGame.night + 1, science: savedGame.science + rightAnswers}))
                break;
            case "english":
                setSavedGame({...savedGame, night: savedGame.night + 1, english: savedGame.english + rightAnswers})
                localStorage.setItem("savedGame", JSON.stringify({...savedGame, night: savedGame.night + 1, english: savedGame.english + rightAnswers}))
                break;
            case "history":
                setSavedGame({...savedGame, night: savedGame.night + 1, history: savedGame.history + rightAnswers})
                localStorage.setItem("savedGame", JSON.stringify({...savedGame, night: savedGame.night + 1, history: savedGame.history + rightAnswers}))
                break;
            case "geography":
                setSavedGame({...savedGame, night: savedGame.night + 1, geography: savedGame.geography + rightAnswers})
                localStorage.setItem("savedGame", JSON.stringify({...savedGame, night: savedGame.night + 1, geography: savedGame.geography + rightAnswers}))
                break;
            default:return;
        }
        console.log(savedGame);
        navigate(`/nightcomplete/${rightAnswers}`);
    }

    return(
        <div className={css([GameStyles.computer, enteredComputer ? "" : GameStyles.computerHide])}>
            <div className={css(GameStyles.computerTopbar)}>
                <div className={css(GameStyles.computerCoreInfo)}>
                    <h4>{time === 0 ? "12" : time}:00 AM</h4>
                    <img className={css(GameStyles.wifiIcon)} alt="" src={network ? Wifi : NoWifi}/>
                </div>
                {savedGame.night === 1 ? <p>Hold Q to look BEHIND YOU, Press R to Exit Computer</p> : ""}
            </div>

            <div ref={downloadSection} className={css(GameStyles.computerDownload)}>
                <h3>Download {subject.charAt(0).toUpperCase() + subject.slice(1)} Assignment</h3>
                <br/>
                {downloadPercentage === 100 ?
                <button onClick={() => takeQuiz()} className={css(GameStyles.downloadButton)}>Take Quiz</button> :
                <button ref={downloadButton} onClick={() => downloadAssignment()} className={css(GameStyles.downloadButton)}>
                    {downloadPercentage === null ? "Download" : `${downloadPercentage}%`}
                </button>}
            </div>

            {homework ? <div ref={quizSection} className={css(GameStyles.quizSection)} style={{display: 'none', textAlign:"center"}}>
                <h2>{homework[questionIndex].question}</h2>
                <br/>
                <div className={css(GameStyles.quizOptions)}>
                    <button disabled={processing} onClick={(e) => nextQuestion(e)} className={css(GameStyles.quizOption)}>{homework[questionIndex].choices[0]}</button>
                    <button disabled={processing} onClick={(e) => nextQuestion(e)} className={css(GameStyles.quizOption)}>{homework[questionIndex].choices[1]}</button>
                    <button disabled={processing} onClick={(e) => nextQuestion(e)} style={subject === "science" ? {display: 'none'} : {}} className={css(GameStyles.quizOption)}>{homework[questionIndex].choices[2]}</button>
                    <button disabled={processing} onClick={(e) => nextQuestion(e)} style={subject === "science" ? {display: 'none'} : {}} className={css(GameStyles.quizOption)}>{homework[questionIndex].choices[3]}</button>
                </div>
            </div> : ""}

            <div ref={uploadSection} style={{display: 'none'}} className={css(GameStyles.computerDownload)}>
                <h3>Submit {subject.charAt(0).toUpperCase() + subject.slice(1)} Assignment</h3>
                <br/>
                {uploadPercentage === 100 ?
                <button onClick={() => shutdown()} className={css(GameStyles.downloadButton)}>Shutdown</button> :
                <button ref={uploadButton} onClick={() => submitAssignment()} className={css(GameStyles.downloadButton)}>
                    {uploadPercentage === null ? "Submit" : `${uploadPercentage}%`}
                </button>}
            </div>

            <div className={css([GameStyles.nowifiwarning, showWarning ? "" : GameStyles.contentHide])}>
                <br/>
                NO CONNECTION
            </div>

        </div>
    )
}