import { GameStyles } from "../styles/GameStyles";
import { css } from "aphrodite";
import { useState, useContext, useEffect } from "react";
import { Context } from "../Context";
import PhoneRinging from "../audio/noises/phoneringing.mp3";
import Night1 from "../audio/dialogues/night1.mp3";
import Night2 from "../audio/dialogues/night2.mp3";
import Night3 from "../audio/dialogues/night3.mp3";
import Night4 from "../audio/dialogues/night4.mp3";
import Night5 from "../audio/dialogues/night5.mp3";

export default function Phone(props){

    const { setShowPhone, showPhone, time, network, turnOffNetwork, turnOnNetwork, networkProgress, networkButton } = props;
    const { savedGame } = useContext(Context);
    const [incomingPhoneCall, setIncomingPhoneCall] = useState(false);
    const [phoneAccept, setPhoneAccept] = useState(false);
    const [phoneRinging] = useState(new Audio(PhoneRinging));
    const [nightDialogue, setNightDialogue] = useState(null);
    const [callDuration, setCallDuration] = useState(0);

    useEffect(() => {
        switch(savedGame.night){
            case 1:
                setNightDialogue(new Audio(Night1));
                break;
            case 2:
                setNightDialogue(new Audio(Night2));
                break;
            case 3:
                setNightDialogue(new Audio(Night3));
                break;
            case 4:
                setNightDialogue(new Audio(Night4));
                break;
            case 5:
                setNightDialogue(new Audio(Night5));
                break;
            default:return;
        }
        const loadingCall = setTimeout(() => {
            setIncomingPhoneCall(true);
            phoneRinging.currentTime = 0;
            phoneRinging.play();
            phoneRinging.onended = () => {
                declineCall();
            }
        },5000)
        return () => {clearTimeout(loadingCall)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const acceptCall = () => {
        setPhoneAccept(true);
        const record = setInterval(() => {
            setCallDuration(callDurationn => callDurationn + 1)
        },1000)
        phoneRinging.pause();
        phoneRinging.remove();
        nightDialogue.currentTime = 0;
        nightDialogue.play();
        nightDialogue.onended = () => {
            setIncomingPhoneCall(false);
            clearInterval(record);
            nightDialogue.remove();
        }
    }
    const declineCall = () => {
        setIncomingPhoneCall(false);
        phoneRinging.pause();
        phoneRinging.remove();
    }

    return (
        <div onMouseOver={() => setShowPhone(true)} onMouseOut={() => setShowPhone(false)} className={css([GameStyles.phone, showPhone ? "" : GameStyles.hidePhone])}>
            <p>{time === 0 ? 12 : time}:00 AM</p>
            <br/>
            <h3>{network ? "Hotspot On" : "Hotspot Off"}</h3>
            <br/>
            <button ref={networkButton} onClick={network ? turnOffNetwork : turnOnNetwork} className={css(GameStyles.networkButton)}>
                {network ? "Turn Off" : "Turn On"}
            </button>
            <br/>
            <p>{networkProgress === 0 || networkProgress === 100 ? "" : `${networkProgress}%`}</p>
            <br/>
            <br/>
            <div className={css([GameStyles.callBox, incomingPhoneCall ? "" : GameStyles.contentHide])}>
                <div>DAMIAN</div>
                {phoneAccept ? 
                <div>
                    0:{callDuration < 10 ? `${'0' + callDuration}` : callDuration} 
                </div>
                :
                <div className={css([GameStyles.callButtons])}>
                    <p onClick={() => acceptCall()} style={{backgroundColor:"green"}} className={css(GameStyles.callButton)}>Accept</p>
                    <p onClick={() => declineCall()} style={{backgroundColor:"crimson"}} className={css(GameStyles.callButton)}>Decline</p>
                </div>}
            </div>
        </div>
    )
}