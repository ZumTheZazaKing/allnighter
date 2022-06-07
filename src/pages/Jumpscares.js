import { JumpscaresStyles } from "../styles/JumpscaresStyles";
import { css } from "aphrodite";
import Prowler from "../components/Jumpscares/Prowler";
import { useState } from "react";

export const Jumpscares = () => {

    const [showProwler, setShowProwler] = useState(false);

    return (
        <div className={css(JumpscaresStyles.page)}>
            <h1>Jumpscares</h1>
            <br/>
            <button onClick={() => setShowProwler(true)}>Prowler Jumpscare</button>
            <Prowler showProwler={showProwler} setShowProwler={setShowProwler}/>
        </div>
    )
}