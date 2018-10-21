import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrapper: {
        left: 0,
        right: 0,
        height: 70,
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    profilePictureWrapper: {
        height: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    name: {
        fontWeight: "bold",
        paddingHorizontal: 10
    }
})