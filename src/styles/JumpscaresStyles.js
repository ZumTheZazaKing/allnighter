import { StyleSheet } from "aphrodite";
import ProwlerImage from '../images/threats/prowler.png';

export const JumpscaresStyles = StyleSheet.create({
    page:{
        width:"100vw",
        height:"100vh",
        overflow:"auto",
        backgroundColor:"whitesmoke",
    },
    container:{
        width:"100vw",
        height:"100vh",
        zIndex:"99",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain",
        position:"fixed",
        top:"0",
        left:"0"
    },
    prowler:{
        backgroundImage:`url(${ProwlerImage})`,
    },
    hide:{
        display: 'none',
        
    }
})