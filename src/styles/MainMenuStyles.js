import { StyleSheet } from "aphrodite";

export const MainMenuStyles = StyleSheet.create({
    container:{
        width:"100vw",
        height:"100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"column",
    },
    text:{
        color:"white"
    },
    button:{
        padding:"10px",
        backgroundColor:"transparent",
        border:"none",
        outline:"none",
        color:"white",
        cursor:"pointer",
        ":hover":{
            color:"crimson"
        }
    },
    disabled:{
        color:"grey",
        cursor:"not-allowed"
    },
    intro:{
        fontSize:"16px",
        lineHeight:"1.5",
        textAlign:"center",
    }
})