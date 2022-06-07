import { StyleSheet } from "aphrodite";
import RoomBackView from '../images/roombackview.jpg'
import RoomMainView from '../images/roommainview.jpg'
import Phone from '../images/phone.png';

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
    phone:{
        position:"fixed",
        top:0,
        left:0,
        zIndex:"2",
        width:"400px",
        height:"700px",
        backgroundImage: `url(${Phone})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        padding:"30px",
        transform:"translateY(60%)",
        transition: "all 0.2s ease-in",
        fontFamily:"Arial",
    },
    hidePhone:{
        transform:"translateY(90%)"
    },
    networkButton:{
        padding:"10px",
        border:"none",
        outline:"none",
        cursor:"pointer",
        backgroundColor:"lightgrey",
        fontSize:"18px",
        borderRadius:"10px"
    },
    callBox:{
        width:"80%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:"rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        color:"white"
    },
    callButtons:{
        display: 'flex',
        alignContent: 'center',
        cursor:"pointer",
    },
    callButton:{
        padding:"5px 10px",
        border:"none",
        outline:"none",
        color:"white",
        fontSize:"18px",
        borderRadius:"10px",
    },
    hidden:{
        visibility:"hidden",
    }
})