import { StyleSheet } from "aphrodite";

export const GameOverStyles = StyleSheet.create({
    container: {
        width: "100vw",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color:"white",
    },
    button:{
        fontSize:"20px",
        cursor:"pointer",
        fontFamily:"Arial",
        ":hover":{
            color:"crimson",
        }
    }
})