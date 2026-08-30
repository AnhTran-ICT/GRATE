import {StyleSheet} from "react-native";
import MyReviewCard from "../components/MyReviewCard";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#f7f7f7"
    },

    //Header
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

    headerMyReviews: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "800"
    },

    //HOME
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

    //Auth
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

    //Catalogue
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

    //Search
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

    //Filter
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

    //Result Header
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

    //Game Cad
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

    //Score Img
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

    //Empty
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

    //Details
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
    },

    gameDetailScroll: {
        flex: 1
    },

    gameDetailScrollContent: {
        paddingBottom: 50
    },

    gameDetailContent: {
        width: "100%",
        maxWidth: 1000,
        alignSelf: "center",
        paddingHorizontal: 24,
        paddingTop: 30
    },

    //Game Hero
    gameHero: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e2e2e2",
        borderRadius: 14,
        padding: 22,
        marginBottom: 20
    },

    gameHeroCover: {
        width: 150,
        height: 180,
        backgroundColor: "#18181f",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    
    gameHeroLetter: {
        color: "#22c55e",
        fontSize: 70,
        fontWeight: "900"
    },

    gameHeroInformation: {
        flex: 1,
        paddingLeft: 28
    },

    gameDetailTitle: {
        fontSize: 38,
        fontWeight: "900",
        color: "#18181f",
        marginBottom: 14
    },

    gameTagRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 18
    },

    gameTag: {
        backgroundColor: "#eeeeee",
        paddingVertical: 7,
        paddingHorizontal: 13,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 5
    },

    gameTagText: {
        fontSize: 13,
        fontWeight: "700",
        color: "#333333"
    },

    gameDeveloper: {
        fontSize: 15,
        color: "#555555"
    },


    //Detail Section

    detailSection: {
        backgroundColor: "#ffffff",

        borderWidth: 1,
        borderColor: "#e2e2e2",

        borderRadius: 14,

        padding: 22,

        marginBottom: 18
    },

    detailSectionLabel: {
        fontSize: 14,
        fontWeight: "900",
        color: "#18181f",
        marginBottom: 18
    },


    //Score

    detailScoreRow: {
        flexDirection: "row",
        alignItems: "center"
    },

    detailScoreInformation: {
        flex: 1,
        paddingLeft: 22
    },

    detailRatingTitle: {
        fontSize: 25,
        fontWeight: "900",
        color: "#22a447",
        marginBottom: 7
    },

    detailRatingDescription: {
        fontSize: 15,
        lineHeight: 22,
        color: "#444444",
        marginBottom: 9
    },

    detailScoreValue: {
        fontSize: 14,
        fontWeight: "700",
        color: "#666666"
    },


    //Description

    gameDescription: {
        fontSize: 16,
        lineHeight: 26,
        color: "#333333"
    },


    //Info

    informationRow: {
        flexDirection: "row",
        justifyContent: "space-between",

        paddingVertical: 12,

        borderBottomWidth: 1,
        borderBottomColor: "#eeeeee"
    },

    informationLabel: {
        fontSize: 15,
        color: "#666666"
    },

    informationValue: {
        fontSize: 15,
        fontWeight: "700",
        color: "#18181f",
        textAlign: "right"
    },


    //Review form
    reviewInputLabel: {
        fontSize: 12,
        fontWeight: "900",
        color: "#555555",
        marginBottom: 8
    },

    ratingInputRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },

    ratingInput: {
        width: 110,

        backgroundColor: "#ffffff",

        borderWidth: 1,
        borderColor: "#d5d5d5",

        borderRadius: 8,

        paddingVertical: 12,
        paddingHorizontal: 14,

        fontSize: 18,
        fontWeight: "800"
    },

    ratingOutOf: {
        marginLeft: 10,
        fontSize: 16,
        color: "#666666",
        fontWeight: "700"
    },

    reviewTextArea: {
        width: "100%",
        minHeight: 130,

        backgroundColor: "#ffffff",

        borderWidth: 1,
        borderColor: "#d5d5d5",

        borderRadius: 9,

        padding: 14,

        fontSize: 15,
        lineHeight: 22
    },

    reviewCharacterRow: {
        alignItems: "flex-end",
        marginTop: 6
    },

    reviewCharacterCount: {
        fontSize: 12,
        color: "#888888"
    },

    reviewSubmitButton: {
        backgroundColor: "#22c55e",

        alignSelf: "flex-start",

        paddingVertical: 12,
        paddingHorizontal: 22,

        borderRadius: 8,

        marginTop: 16
    },

    reviewSubmitButtonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "900"
    },


    //Already reviewed

    reviewAlreadySubmitted: {
        backgroundColor: "#f3f4f4",

        borderWidth: 1,
        borderColor: "#dddddd",

        borderRadius: 10,

        padding: 18
    },

    reviewAlreadyTitle: {
        fontSize: 17,
        fontWeight: "900",
        color: "#18181f",
        marginBottom: 5
    },

    reviewAlreadyText: {
        fontSize: 14,
        lineHeight: 21,
        color: "#666666"
    },


    //Review card

    reviewCard: {
        backgroundColor: "#fafafa",

        borderWidth: 1,
        borderColor: "#e4e4e4",

        borderRadius: 10,

        padding: 18,

        marginBottom: 12
    },

    reviewCardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",

        marginBottom: 15
    },

    reviewUsername: {
        fontSize: 16,
        fontWeight: "900",
        color: "#18181f",
        marginBottom: 3
    },

    reviewDate: {
        fontSize: 12,
        color: "#888888"
    },

    reviewRatingBox: {
        minWidth: 76,

        backgroundColor: "#18181f",

        borderRadius: 8,

        paddingVertical: 7,
        paddingHorizontal: 10,

        alignItems: "center"
    },

    reviewRatingNumber: {
        color: "#22c55e",
        fontSize: 20,
        fontWeight: "900"
    },

    reviewRatingLabel: {
        color: "#ffffff",
        fontSize: 10,
        fontWeight: "700"
    },

    reviewBody: {
        fontSize: 15,
        lineHeight: 23,
        color: "#333333"
    },

    reviewCountText: {
        marginTop: 5,
        fontSize: 13,
        color: "#888888"
    },

    communityReviewCount: {
        backgroundColor: "#18181f",
        color: "#ffffff",
        minWidth: 30,
        textAlign: "center",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        fontSize: 12,
        fontWeight: "800"
    },

    reviewActionRow: {
        flexDirection: "row",
        marginTop: 18
    },

    reviewEditButton: {
        backgroundColor: "#18181f",
        paddingVertical: 9,
        paddingHorizontal: 18,
        borderRadius: 7,
        marginRight: 10
    },

    reviewEditButtonText: {
        color: "#ffffff",
        fontWeight: "800"
    },

    reviewDeleteButton: {
        backgroundColor: "#dc2626",
        paddingVertical: 9,
        paddingHorizontal: 18,
        borderRadius: 7
    },

    reviewDeleteButtonText: {
        color: "#ffffff",
        fontWeight: "800"
    },

    reviewEditedText: {
        marginTop: 3,
        fontSize: 11,
        color: "#888888",
        fontStyle: "italic"
    },

    editReviewContainer: {
        backgroundColor: "#f7f7f7",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 10,
        padding: 18,
        marginBottom: 12
    },

    editReviewActionRow: {
        flexDirection: "row",
        alignItems: "center"
    },

    cancelEditButton: {
        marginTop: 16,
        marginLeft: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#cccccc"
    },

    cancelEditButtonText: {
        color: "#444444",
        fontWeight: "800"
    },

    // MyReviewCard

    myReviewsScroll: {
        flex: 1
    },

    myReviewsScrollContent: {
        flexGrow: 1,
        paddingBottom: 50
    },

    myReviewsContent: {
        width: "100%",
        maxWidth: 1000,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingTop: 30
    },

    myReviewsHeading: {
        marginBottom: 24
    },

    myReviewsTitle: {
        fontSize: 32,
        fontWeight: "900",
        color: "#18181f"
    },

    myReviewsSubtitle: {
        marginTop: 6,
        fontSize: 15,
        color: "#666666"
    },

    myReviewCard: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 10,
        padding: 20,
        marginBottom: 14
    },

    myReviewCardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 14
    },

    myReviewGameInfo: {
        flex: 1,
        paddingRight: 20
    },

    myReviewGameTitle: {
        fontSize: 20,
        fontWeight: "900",
        color: "#18181f"
    },

    myReviewDate: {
        marginTop: 5,
        fontSize: 12,
        color: "#777777"
    },

    myReviewText: {
        fontSize: 15,
        lineHeight: 23,
        color: "#333333"
    },

    //Report
    reportReviewButton: {
        alignSelf: "flex-start",
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: "#dc2626",
        borderRadius: 7
    },

    reportReviewButtonText: {
        color: "#dc2626",
        fontSize: 13,
        fontWeight: "800"
    },

    reportModalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.55)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    reportModalContainer: {
        width: "100%",
        maxWidth: 480,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 24
    },

    reportModalTitle: {
        fontSize: 24,
        fontWeight: "900",
        color: "#18181f"
    },

    reportModalDescription: {
        marginTop: 6,
        marginBottom: 18,
        fontSize: 14,
        color: "#666666"
    },

    reportReasonButton: {
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 14,
        marginBottom: 8
    },

    reportReasonButtonSelected: {
        borderColor: "#22c55e",
        backgroundColor: "#f0fdf4"
    },

    reportReasonText: {
        fontSize: 14,
        color: "#333333",
        fontWeight: "600"
    },

    reportReasonTextSelected: {
        color: "#15803d",
        fontWeight: "800"
    },

    reportModalActions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 16
    },

    reportCancelButton: {
        paddingVertical: 11,
        paddingHorizontal: 18,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#cccccc",
        marginRight: 10
    },

    reportCancelButtonText: {
        color: "#444444",
        fontWeight: "800"
    },

    reportSubmitButton: {
        backgroundColor: "#dc2626",
        paddingVertical: 11,
        paddingHorizontal: 18,
        borderRadius: 8
    },

    reportSubmitButtonDisabled: {
        opacity: 0.4
    },

    reportSubmitButtonText: {
        color: "#ffffff",
        fontWeight: "800"
    },
});

export default styles;