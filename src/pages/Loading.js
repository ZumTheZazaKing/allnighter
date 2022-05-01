import { css } from "aphrodite";
import { LoadingStyles } from "../styles/LoadingStyles";

export default function Loading(){
    return (
        <div className={css(LoadingStyles.container)}>
            <h1>Loading...</h1>
        </div>
    );
}