import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrapper: {
        paddingVertical: 30,
        height: 210,
        alignItems: "center"
    },
    dial: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: "#F8F8F8"
    },
    textWrapper: {
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center"
    },
    valueNumber: {
        fontWeight: "100",
        fontSize: 48,
        color: "#2D848F"
    },
    mask: {
        position: "absolute",
        left: 0
    }
})