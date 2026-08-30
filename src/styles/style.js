import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#f7f7f7"
    },

    /* =========================
       HEADER
    ========================= */
    header: {
        height: 72,
        width: "100%",
        backgroundColor: "#18181f",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 28
    },

    headerSide: {
        width: 60
    },

    headerLogo: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "900",
        letterSpacing: 1
    },

    headerIcon: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "300"
    },

    /* =========================
       HOME
    ========================= */
    homeHero: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24
    },

    homeLogo: {
        fontSize: 54,
        fontWeight: "900",
        color: "#18181f",
        marginBottom: 8
    },

    homeHeadline: {
        fontSize: 28,
        fontWeight: "800",
        textAlign: "center",
        marginBottom: 12
    },

    homeDescription: {
        maxWidth: 520,
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
        color: "#626262",
        marginBottom: 28
    },

    primaryButton: {
        backgroundColor: "#22c55e",
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 8
    },

    primaryButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "800"
    },

    homeFooter: {
        alignItems: "center",
        paddingBottom: 30
    },

    /* =========================
       AUTH
    ========================= */
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f7f7f7"
    },

    authContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f7f7f7"
    },

    authTitle: {
        fontSize: 30,
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 30
    },

    input: {
        width: "100%",
        maxWidth: 480,
        alignSelf: "center",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 8,
        paddingVertical: 13,
        paddingHorizontal: 14,
        marginBottom: 14
    },

    button: {
        backgroundColor: "#18181f",
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignSelf: "center",
        marginTop: 8
    },

    buttonText: {
        color: "#ffffff",
        fontWeight: "800"
    },

    registerButton: {
        marginTop: 18
    },

    registerText: {
        textAlign: "center",
        fontWeight: "700"
    },

    /* =========================
       CATALOGUE
    ========================= */
    catalogueContent: {
        flex: 1,
        width: "100%",
        maxWidth: 1100,
        alignSelf: "center",
        paddingHorizontal: 24,
        paddingTop: 28
    },

    catalogueTitle: {
        fontSize: 34,
        fontWeight: "900",
        color: "#18181f",
        marginBottom: 20
    },

    /* SEARCH */
    searchBar: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#d5d5d5",
        borderRadius: 9,
        paddingHorizontal: 15,
        marginBottom: 24
    },

    searchIcon: {
        fontSize: 22,
        marginRight: 10,
        color: "#555555"
    },

    searchInput: {
        flex: 1,
        height: "100%",
        fontSize: 16,
        outlineStyle: "none"
    },

    searchClear: {
        fontSize: 24,
        color: "#777777"
    },

    /* FILTERS */
    filterLabel: {
        fontSize: 12,
        fontWeight: "800",
        color: "#555555",
        marginBottom: 9
    },

    filterScroll: {
        flexGrow: 0,
        marginBottom: 20
    },

    filterRow: {
        flexDirection: "row",
        alignItems: "center"
    },

    filterChip: {
        flexGrow: 0,
        flexShrink: 0,
        paddingVertical: 9,
        paddingHorizontal: 17,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 20,
        marginRight: 9
    },

    filterChipActive: {
        backgroundColor: "#18181f",
        borderColor: "#18181f"
    },

    filterChipText: {
        color: "#18181f",
        fontSize: 14,
        fontWeight: "600"
    },

    filterChipTextActive: {
        color: "#ffffff"
    },

    /* RESULT HEADER */
    resultHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },

    resultCount: {
        color: "#666666",
        fontSize: 14
    },

    clearFilters: {
        color: "#dc2626",
        fontSize: 14,
        fontWeight: "700"
    },

    /* =========================
       GAME CARD
    ========================= */
    gameList: {
        paddingBottom: 40
    },

    gameCard: {
        width: "100%",
        minHeight: 125,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e1e1e1",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12
    },

    gameCoverPlaceholder: {
        width: 95,
        height: 100,
        borderRadius: 8,
        backgroundColor: "#18181f",
        justifyContent: "center",
        alignItems: "center"
    },

    gameCoverLetter: {
        color: "#22c55e",
        fontSize: 42,
        fontWeight: "900"
    },

    gameCardContent: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 18
    },

    gameTitle: {
        fontSize: 20,
        fontWeight: "800",
        color: "#18181f",
        marginBottom: 7
    },

    gameMeta: {
        fontSize: 14,
        color: "#666666",
        marginBottom: 5
    },

    /* SCORE IMAGE */
    grateScoreContainer: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },

    grateScoreImage: {
        width: 88,
        height: 88
    },

    grateScoreNumber: {
        position: "absolute",
        bottom: 0,
        right: 2,
        minWidth: 34,
        backgroundColor: "#18181f",
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 6
    },

    grateScoreNumberText: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: "900",
        textAlign: "center"
    },

    /* EMPTY */
    emptyState: {
        paddingVertical: 60,
        alignItems: "center"
    },

    emptyStateTitle: {
        fontSize: 22,
        fontWeight: "800",
        marginBottom: 6
    },

    emptyStateText: {
        color: "#777777",
        fontSize: 15
    },

    /* =========================
       DETAILS
    ========================= */

    screenTitle: {
        fontSize: 30,
        fontWeight: "900",
        marginBottom: 16
    },

    detailTitle: {
        fontSize: 32,
        fontWeight: "900",
        marginBottom: 20
    },

    detailInfo: {
        fontSize: 16,
        marginBottom: 8
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        marginTop: 20
    }
});

export default styles;