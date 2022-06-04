import { GameStyles } from "../styles/GameStyles";
import { css } from "aphrodite";

export default function Phone(props){

    const { setShowPhone, showPhone, time, network, turnOffNetwork, turnOnNetwork, networkProgress, networkButton } = props;

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
        </div>
    )
}