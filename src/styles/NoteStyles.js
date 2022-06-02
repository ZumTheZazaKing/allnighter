import { StyleSheet } from "aphrodite";

const opacityKeyframes = {
    'from': {opacity: 0,},
    'to': {opacity: 1,}
};

export const NoteStyles = StyleSheet.create({
    container:{
        width:"100vw",
        height:"100vh",
        backgroundColor:"black",
        cursor:"pointer",
    },
    image:{
        width:"100%",
        height:"100%",
        animationName: opacityKeyframes,
        animationDuration: "5s",
        animationIterationCount: "1",
        transition: "opacity 5s ease-in-out",
    }
})