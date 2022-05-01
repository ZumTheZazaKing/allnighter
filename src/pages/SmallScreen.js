import { css } from "aphrodite";
import { LoadingStyles } from "../styles/LoadingStyles";

export default function SmallScreen(){
    return(
        <div className={css(LoadingStyles.container)}>
            <h1>Use a larger screen<br/>(800px x 480px)</h1>
        </div>
    )
}