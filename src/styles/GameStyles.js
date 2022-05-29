import { StyleSheet } from "aphrodite";
import RoomBackView from '../images/roombackview.jpg'
import RoomMainView from '../images/roommainview.jpg'

export const GameStyles = StyleSheet.create({
    text:{
        color:"white"
    },
    container:{
        width:"100vw",
        height:"100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position:"fixed",
        top:"0",
        left:"0",
        zIndex:"2"
    },
    backView:{
        backgroundImage: `url(${RoomBackView})`,
    },
    mainView:{
        backgroundImage: `url(${RoomMainView})`,
        cursor: "pointer",
    },
    hide:{
        zIndex:"1"
    },
    computerHide:{
        zIndex:"-1"
    },
    computer:{
        position: "fixed",
        top:0,
        left:0,
        zIndex: "3",
        width:"100vw",
        height:"100vh",
        backgroundColor:"whitesmoke",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    computerTopbar:{
        position: "absolute",
        top:0,
        left:0,
        width:"100vw",
        padding:"10px",
        display: 'flex',
        justifyContent: 'space-between',
    },
    computerDownload:{
        textAlign:"center",
    },
    downloadButton:{
        padding:"10px",
        border:"none",
        outline:"none",
        cursor:"pointer",
        backgroundColor:"lightgrey"
    }
})