import { css } from "aphrodite";
import { LoadingStyles } from "../styles/LoadingStyles";

export default function SmallScreen(){
    return(
        <div className={css(LoadingStyles.container)}>
            <h1>Screen size must be:
            <br/><br/>
            Minimum (800px x 600px)
            <br/>
            or<br/>
            Maximum (1000px x 700px)
            </h1>
        </div>
    )
}