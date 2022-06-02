import { StyleSheet } from "aphrodite";

const opacityKeyframes = {
    'from': {opacity: 0,},
    'to': {opacity: 1,}
};

export const NightCompleteStyles = StyleSheet.create({
    container: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"white",
        flexDirection:"column",
    },
    fadeIn:{
        animationName: opacityKeyframes,
        animationDuration: "3s",
        animationIterationCount: "1",
    },
    button:{
        padding:"10px",
        backgroundColor:"transparent",
        border:"none",
        outline:"none",
        color:"white",
        cursor:"pointer",
        textTransform:"uppercase",
        fontSize:"14px",
        ":hover":{
            color:"crimson"
        }
    }
})