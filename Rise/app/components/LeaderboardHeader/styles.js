import { StyleSheet } from "react-native"

export default StyleSheet.create({
    circleContainer: {
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    normalPlace: {
        width: 75,
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",
        color: "#517193"
    },
    firstPlace: {
        width: 140,
        fontSize: 14,
        textAlign: "center",
        paddingTop: 20,
        fontWeight: "bold",
        color: "#517193"
    },
    winnerCircle: {
        width: 140,
        height: 100,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    normalCircle: {
        width: 75,
        height: 75,
        borderRadius: 35
    },
    innerImage: {
        flex: 1,
        borderRadius: 50
    }
})