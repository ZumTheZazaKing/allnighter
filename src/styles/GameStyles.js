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
        zIndex:"2",
    },
    backView:{
        backgroundImage: `url(${RoomBackView})`,
        zIndex:"3",
    },
    mainView:{
        backgroundImage: `url(${RoomMainView})`,
        cursor: "pointer",
    },
    hide:{
        zIndex:"1"
    },
    computerHide:{
        zIndex:"-1",
        opacity:"0"
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
        fontFamily:"Arial",
        flexDirection:"column",
    },
    computerTopbar:{
        position: "absolute",
        top:0,
        left:0,
        width:"100vw",
        height:"10vh",
        padding:"10px",
        display: 'flex',
        justifyContent: 'space-between',
    },
    computerCoreInfo:{
        display: 'flex',
    },
    wifiIcon:{
        width:"18px",
        height:"15px",
        marginLeft:"10px"
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
    },
    contentHide:{
        display: 'none',
    },
    quizSection:{
        width:"60%",
    },  
    quizOptions:{
        textAlign:"center",
        display:"grid",
        gridTemplateColumns:"repeat(2,1fr)",
    },
    quizOption:{
        padding:"10px",
        border:"none",
        outline:"none",
        cursor:"pointer",
        backgroundColor:"lightgrey",
        fontSize:"18px",
        margin:"10px 10px"
    },
    nowifiwarning:{
        textAlign:"center",
        fontSize:"18px",
        color:"red",
        position:"fixed",
        bottom:"20px",
        left:"50%",
        transform:"translateX(-50%)",
    },
    computerSettings:{
        zIndex: "3",
        width:"100%",
        height:"90vh",
        backgroundColor:"whitesmoke",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily:"Arial",
        flexDirection:"column",

    },
    hidden:{
        visibility:"hidden",
    }
})