import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    authContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        padding: 20
    },

    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },

    logo: {
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 1
    },

    subtitle: {
        fontSize: 18,
        marginBottom: 10
    },

    welcomeText: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20
    },

    authTitle: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30
    },

    screenTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: "#ffffff"
    },

    button: {
        backgroundColor: "#000000",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10
    },

    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16
    },

    registerButton: {
        marginTop: 20,
        padding: 10
    },

    registerText: {
        textAlign: "center",
        color: "#333333",
        fontWeight: "bold"
    },

    gameListContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ffffff",
        padding: 20
    },

    gameCard: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#e0e0e0"
    },

    gameTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5
    },

    gameInfo: {
        fontSize: 14,
        color: "#555555",
        marginBottom: 4
    },

    scoreContainer: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
        alignSelf: "flex-start"
    },

    scoreText: {
        fontSize: 18,
        fontWeight: "bold"
    },

    detailTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },

    detailInfo: {
        fontSize: 16,
        marginBottom: 8
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        marginTop: 20,
        marginBottom: 20
    }
});

export default styles;