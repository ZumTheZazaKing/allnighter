import { GameStyles } from "../styles/GameStyles";
import { css } from "aphrodite";

export default function ComputerSettings(props){

    const { setShowPhone, network, networkProgress, turnOnNetwork, turnOffNetwork, networkButton } = props;

    return (
        <div className={css(GameStyles.computerSettings)}>
            <button onClick={() => setShowPhone(false)}>Back</button>
            <h2>Settings</h2>
            <br/>
            <h3>{network ? "Connected" : "Not Connected"}</h3>
            <br/>
            {network ? 
            <button ref={networkButton} onClick={() => turnOffNetwork()}>Disconnect</button>
            :
            <button ref={networkButton} onClick={() => turnOnNetwork()}>Connect</button>}
            <br/>
            {networkProgress !== 0 ? <p>{networkProgress}%</p> : ""}
        </div>
    )
}