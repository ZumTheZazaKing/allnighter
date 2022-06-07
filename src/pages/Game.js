import { css } from "aphrodite"
import { GameStyles } from "../styles/GameStyles"
import { useState, useEffect, useRef } from "react";
import Computer from "./Computer";
import ComputerFan from '../audio/noises/computerfan.mp3';
import { useNavigate } from "react-router-dom";
import Phone from "../components/Phone";
import DigitalPress from '../audio/soundeffects/digitalPress.mp3';
import Prowler from "../components/Jumpscares/Prowler";

export const Game = () => {

    const [digitalpress] = useState(new Audio(DigitalPress));
    const [computerfan] = useState(new Audio(ComputerFan));
    const [lookback, setLookBack] = useState(false)
    const [enteredComputer, setEnteredComputer] = useState(false)
    const [time, setTime] = useState(0)
    const [network, setNetwork] = useState(false);
    const [networkProgress, setNetworkProgress] = useState(0);
    const navigate = useNavigate();
    const [showPhone, setShowPhone] = useState(false);

    const [showProwler, setShowProwler] = useState(false);
    
    const networkButton = useRef();

    useEffect(() => {
        computerfan.currentTime = 0;
        computerfan.play();
        computerfan.loop = true;
        return () => {
            computerfan.pause();
            computerfan.currentTime = 0;
            computerfan.remove();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        const addTime = setInterval(() => {
            setTime(timee => timee + 1)
        },60000)
        return () => {
            clearInterval(addTime)
        }
    },[])

    useEffect(() => {
        if(time === 6){
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

    const turnOnNetwork = () => {
        digitalpress.currentTime = 0;
        digitalpress.play();
        digitalpress.onended = () => {digitalpress.remove()}
        networkButton.current.disabled = true;
        const turningOn = setInterval(() => {
            setNetworkProgress(networkProgresss => networkProgresss + 1)
       },150)
        const done = setTimeout(() => {
            clearInterval(turningOn)
            clearTimeout(done)
            setNetwork(true)
            setNetworkProgress(0)
            networkButton.current.disabled = false;
            let gracePeriod = Math.floor(Math.random()*40000)
            const doneGrace = setTimeout(() => {
                setNetwork(false)
                clearTimeout(doneGrace)
            },gracePeriod)
        },15000)
    }

    const turnOffNetwork = () => {
        digitalpress.currentTime = 0;
        digitalpress.play();
        digitalpress.onended = () => {digitalpress.remove()}
        setNetwork(false)
        setNetworkProgress(0)
    }
    

    return(
        <div>
            <div className={css([GameStyles.container, GameStyles.backView, lookback ? "" : GameStyles.hide])}></div>
            <div onClick={enterComputer} className={css([GameStyles.container, GameStyles.mainView, lookback ? GameStyles.hide : ""])}></div>
            <Phone 
                networkProgress={networkProgress}
                network={network}
                networkButton={networkButton}
                setShowPhone={setShowPhone}
                showPhone={showPhone}
                time={time}
                turnOnNetwork={turnOnNetwork}
                turnOffNetwork={turnOffNetwork}
            />
            <Computer network={network} time={time} enteredComputer={enteredComputer}/>
            <Prowler showProwler={showProwler} setShowProwler={setShowProwler}/>
        </div>
    )
}