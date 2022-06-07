import { JumpscaresStyles } from "../../styles/JumpscaresStyles";
import { css } from "aphrodite";
import { useEffect, useState } from "react";
import ProwlerDialogue from '../../audio/jumpscare/prowler_dialogue.mp3';
import { useNavigate } from "react-router-dom";

export default function Prowler(props){

    const { showProwler, setShowProwler } = props;
    const navigate = useNavigate()
    const [prowler_dialogue] = useState(new Audio(ProwlerDialogue));

    useEffect(() => {
        if(showProwler){
            prowler_dialogue.currentTime = 0;
            prowler_dialogue.play();
            prowler_dialogue.onended = () => {
                prowler_dialogue.remove();
                setShowProwler(false)
                //navigate(`/gameover/prowler`)
            }
        }
    },[prowler_dialogue, setShowProwler, showProwler])

    return(
        <div className={css([
            JumpscaresStyles.container,
            JumpscaresStyles.prowler,
            showProwler?"":JumpscaresStyles.hide
        ])}>
        </div>
    )
}