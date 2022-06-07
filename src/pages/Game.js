import { css } from "aphrodite"
import { GameStyles } from "../styles/GameStyles"
import { useState, useEffect, useRef, useContext } from "react";
import Computer from "./Computer";
import ComputerFan from '../audio/noises/computerfan.mp3';
import { useNavigate } from "react-router-dom";
import Phone from "../components/Phone";
import DigitalPress from '../audio/soundeffects/digitalPress.mp3';
import Prowler from "../components/Jumpscares/Prowler";
import { Context } from "../Context";

import GlassBreak from '../audio/noises/glassbreak.mp3';
import Footsteps from '../audio/noises/footsteps.mp3';
import DoorCreak from '../audio/noises/doorcreak.mp3';

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
    const [power, setPower] = useState(true)

    const [glass_break] = useState(new Audio(GlassBreak));
    const [footsteps] = useState(new Audio(Footsteps))
    const [doorcreak] = useState(new Audio(DoorCreak))

    const { savedGame } = useContext(Context);

    const [showProwler, setShowProwler] = useState(false);
    const [prowlerPresent, setProwlerPresent] = useState(false);
    
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

    //Prowler's cycle
    useEffect(() => {
        if(savedGame.night === 1)return;
        const prowlerEntered = setTimeout(() => {
            glass_break.currentTime = 0;
            glass_break.play();
            glass_break.onended = () => {
                glass_break.remove();
                setProwlerPresent(true);
                clearTimeout(prowlerEntered);
            }
        },60000)
        if(prowlerPresent){
            const prowlerComing = setInterval(() => {
                footsteps.currentTime = 0;
                footsteps.play();
                footsteps.onended = () => {
                    footsteps.remove();
                    doorcreak.currentTime = 0;
                    doorcreak.play();
                    doorcreak.onended = () => {
                        doorcreak.remove();
                        const prowlerCheck = setTimeout(() => {
                            if(power){
                                setShowProwler(true);
                                setLookBack(true);
                                setEnteredComputer(false);
                                clearTimeout(prowlerCheck);
                                clearTimeout(prowlerComing);
                            }
                        },5000)
                    }
                }
            },Math.floor(Math.random()*180000))
        }
    },[])

    document.addEventListener("keydown", (e) => {
        if(e.key === "q"){
            setLookBack(true)
        }
        if(e.key === "r"){
            setEnteredComputer(false)
        }
        if(e.key === "f"){
            if(!lookback)return;
            setLookBack(false)
            if(power)return setPower(false)
            if(!power)return setPower(true)
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
            <div 
                className={css([
                    GameStyles.container, 
                    power ? GameStyles.backView : "", 
                    lookback ? "" : GameStyles.hide
                ])}>
            </div>
            <div 
                onClick={power ? enterComputer :() => {return}} 
                className={css([
                    GameStyles.container, 
                    power ? GameStyles.mainView : "", 
                    lookback ? GameStyles.hide : ""
                ])}>
            </div>
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