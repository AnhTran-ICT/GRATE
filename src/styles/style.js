import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    // General
    page: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#ffffff"
    },
    primaryButton: {
        backgroundColor: "#ffb000",
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 7
    },
    primaryButtonText: {
        color: "#111111",
        fontSize: 15,
        fontWeight: "900"
    },
    button: {
        backgroundColor: "#ffb000",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 7,
        alignSelf: "center",
        marginTop: 8
    },
    buttonText: {
        color: "#111111",
        fontWeight: "900"
    },

    // Header
    header: {
        height: 58,
        width: "100%",
        backgroundColor: "#181818",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#333333"
    },
    headerLeft: {
        minWidth: 100
    },
    headerLogo: {
        color: "#ffffff",
        fontSize: 23,
        fontWeight: "900",
        letterSpacing: 0.5
    },
    headerIcon: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "700"
    },
    headerActions: {
        minWidth: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    headerMyReviewsButton: {
        marginRight: 8
    },
    headerMyReviews: {
        backgroundColor: "#ffb000",
        color: "#181818",
        fontSize: 12,
        fontWeight: "900",
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 7
    },
    headerLogoutButton: {
        backgroundColor: "#ffb000",
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 7
    },
    headerLogoutText: {
        color: "#181818",
        fontSize: 12,
        fontWeight: "900"
    },

    // Home
    homeScroll: {
        flex: 1
    },
    homeScrollContent: {
        paddingBottom: 50
    },
    homeHero: {
        minHeight: 270,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 42,
        backgroundColor: "#242424"
    },
    homeLogo: {
        fontSize: 58,
        lineHeight: 64,
        fontWeight: "900",
        color: "#ffffff",
        letterSpacing: 2
    },
    homeLogoAccent: {
        color: "#ffb000"
    },
    homeHeadline: {
        marginTop: 8,
        fontSize: 18,
        lineHeight: 26,
        fontWeight: "600",
        color: "#ffffff",
        textAlign: "center"
    },
    homeDescription: {
        marginTop: 2,
        marginBottom: 18,
        fontSize: 15,
        color: "#e0e0e0",
        textAlign: "center"
    },
    homeContent: {
        width: "100%",
        maxWidth: 1180,
        alignSelf: "center",
        paddingHorizontal: 22,
        paddingTop: 24
    },
    homeSectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16
    },
    homeSectionTitle: {
        fontSize: 21,
        fontWeight: "900",
        color: "#181818"
    },
    homeViewAll: {
        color: "#15803d",
        fontSize: 13,
        fontWeight: "800"
    },
    homeDivider: {
        width: "100%",
        height: 1,
        backgroundColor: "#dddddd",
        marginVertical: 24
    },
    homeFooter: {
        alignItems: "center",
        paddingBottom: 30
    },

    // Home - New Releases
    releaseRow: {
        paddingBottom: 8
    },
    releaseCard: {
        width: 185,
        marginRight: 16
    },
    releaseCover: {
        width: "100%",
        height: 155,
        borderRadius: 7,
        backgroundColor: "#202020",
        justifyContent: "center",
        alignItems: "center"
    },
    releaseCoverLetter: {
        fontSize: 62,
        fontWeight: "900",
        color: "#ffb000"
    },
    releaseNameScoreRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: 9
    },
    releaseNameBlock: {
        flex: 1,
        paddingRight: 5
    },
    releaseTitle: {
        fontSize: 14,
        fontWeight: "900",
        color: "#181818"
    },
    releasePlatform: {
        marginTop: 4,
        fontSize: 12,
        color: "#666666"
    },

    // Home - Top Rated
    topRatedRow: {
        minHeight: 82,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5",
        paddingVertical: 10
    },
    topRatedNumber: {
        width: 35,
        fontSize: 24,
        fontWeight: "900",
        color: "#181818"
    },
    topRatedCover: {
        width: 58,
        height: 58,
        backgroundColor: "#222222",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    topRatedCoverLetter: {
        color: "#ffb000",
        fontSize: 26,
        fontWeight: "900"
    },
    topRatedInformation: {
        flex: 1,
        paddingHorizontal: 14
    },
    topRatedTitle: {
        fontSize: 15,
        fontWeight: "900",
        color: "#181818"
    },
    topRatedPlatform: {
        marginTop: 5,
        fontSize: 12,
        color: "#666666"
    },

    // Authentication
    authContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#ffffff"
    },
    authTitle: {
        fontSize: 30,
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 30,
        color: "#181818"
    },
    input: {
        width: "100%",
        maxWidth: 480,
        alignSelf: "center",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 7,
        paddingVertical: 13,
        paddingHorizontal: 14,
        marginBottom: 14
    },
    registerButton: {
        marginTop: 18
    },
    registerText: {
        textAlign: "center",
        fontWeight: "700",
        color: "#333333"
    },

    // Catalogue
    catalogueContent: {
        flex: 1,
        width: "100%",
        maxWidth: 1050,
        alignSelf: "center",
        paddingHorizontal: 22,
        paddingTop: 24
    },
    catalogueTitle: {
        fontSize: 30,
        fontWeight: "900",
        color: "#181818"
    },
    catalogueSubtitle: {
        marginTop: 3,
        marginBottom: 20,
        fontSize: 13,
        color: "#666666"
    },
    catalogueSearchSection: {
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd",
        marginBottom: 12
    },
    catalogueFilterBlock: {
        marginBottom: 8
    },

    // Search
    searchBar: {
        height: 42,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 7,
        paddingHorizontal: 12,
        marginBottom: 10
    },
    searchIcon: {
        fontSize: 18,
        marginRight: 9,
        color: "#555555"
    },
    searchInput: {
        flex: 1,
        height: "100%",
        fontSize: 13,
        outlineStyle: "none"
    },
    searchClear: {
        fontSize: 20,
        color: "#777777"
    },

    // Filters
    filterLabel: {
        fontSize: 13,
        fontWeight: "900",
        color: "#222222",
        marginBottom: 7
    },
    filterScroll: {
        flexGrow: 0,
        marginBottom: 12
    },
    filterRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    filterChip: {
        flexGrow: 0,
        flexShrink: 0,
        paddingVertical: 7,
        paddingHorizontal: 14,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 7,
        marginRight: 7
    },
    filterChipActive: {
        backgroundColor: "#ffb000",
        borderColor: "#ffb000"
    },
    filterChipText: {
        color: "#333333",
        fontSize: 12,
        fontWeight: "700"
    },
    filterChipTextActive: {
        color: "#111111",
        fontWeight: "900"
    },

    // Catalogue Results
    resultHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },
    resultCount: {
        color: "#666666",
        fontSize: 13
    },
    clearFilters: {
        color: "#dc2626",
        fontSize: 13,
        fontWeight: "800"
    },

    // Game Card
    gameList: {
        paddingBottom: 50
    },
    gameCard: {
        width: "100%",
        minHeight: 115,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 7,
        padding: 11,
        marginBottom: 10
    },
    gameCoverPlaceholder: {
        width: 82,
        height: 92,
        borderRadius: 5,
        backgroundColor: "#66100d",
        justifyContent: "center",
        alignItems: "center"
    },
    gameCoverLetter: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: "900"
    },
    gameCardContent: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 14
    },
    gameTitle: {
        fontSize: 17,
        fontWeight: "900",
        color: "#181818",
        marginBottom: 7
    },
    gameMeta: {
        fontSize: 12,
        color: "#666666",
        marginBottom: 5
    },
    gameDeveloperCard: {
        fontSize: 12,
        color: "#777777"
    },
    gameTagRowSmall: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 6
    },
    smallGameTag: {
        backgroundColor: "#eef1f4",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        marginRight: 5,
        marginBottom: 4
    },
    smallGameTagText: {
        fontSize: 10,
        color: "#445161",
        fontWeight: "700"
    },
    gameCardScore: {
        width: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    communityScoreSmall: {
        marginTop: 1,
        fontSize: 9,
        color: "#555555",
        textAlign: "center"
    },

    // Grate Score
    grateScoreContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    grateScoreContainerSmall: {
        width: 74,
        minHeight: 72
    },
    grateScoreContainerLarge: {
        width: 145,
        minHeight: 160
    },
    grateScoreImage: {
        width: 72,
        height: 72
    },
    grateScoreImageSmall: {
        width: 52,
        height: 52
    },
    grateScoreImageLarge: {
        width: 120,
        height: 120
    },
    grateScoreValue: {
        marginTop: -2,
        fontSize: 20,
        fontWeight: "900"
    },
    grateScoreValueSmall: {
        fontSize: 17
    },
    grateScoreValueLarge: {
        fontSize: 31
    },
    grateScoreLabel: {
        marginTop: 2,
        fontSize: 11,
        fontWeight: "800",
        color: "#666666"
    },

    // Empty State
    emptyState: {
        paddingVertical: 60,
        alignItems: "center"
    },
    emptyStateTitle: {
        fontSize: 22,
        fontWeight: "800",
        marginBottom: 6,
        color: "#181818"
    },
    emptyStateText: {
        color: "#777777",
        fontSize: 15
    },

    // Game Details
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

    // Game Hero
    gameHero: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd",
        paddingVertical: 22,
        marginBottom: 20
    },
    gameHeroCover: {
        width: 150,
        height: 180,
        backgroundColor: "#181818",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center"
    },
    gameHeroLetter: {
        color: "#ffb000",
        fontSize: 70,
        fontWeight: "900"
    },
    gameHeroInformation: {
        flex: 1,
        paddingLeft: 28
    },
    gameDetailTitle: {
        fontSize: 34,
        fontWeight: "900",
        color: "#181818",
        marginBottom: 14
    },
    gameTagRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 18
    },
    gameTag: {
        backgroundColor: "#eef1f4",
        paddingVertical: 6,
        paddingHorizontal: 11,
        borderRadius: 4,
        marginRight: 8,
        marginBottom: 5
    },
    gameTagText: {
        fontSize: 12,
        fontWeight: "700",
        color: "#445161"
    },
    gameDeveloper: {
        fontSize: 14,
        color: "#555555"
    },

    // Detail Sections
    detailSection: {
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd",
        paddingVertical: 22,
        marginBottom: 18
    },
    detailSectionLabel: {
        fontSize: 18,
        fontWeight: "900",
        color: "#181818",
        marginBottom: 18
    },

    // Detail Score
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
        color: "#15803d",
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

    // Game Description
    gameDescription: {
        fontSize: 16,
        lineHeight: 26,
        color: "#333333"
    },

    // Game Information
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
        color: "#181818",
        textAlign: "right"
    },

    // Review Form
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
        borderColor: "#cccccc",
        borderRadius: 7,
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
        borderColor: "#cccccc",
        borderRadius: 7,
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
        backgroundColor: "#ffb000",
        alignSelf: "flex-start",
        paddingVertical: 11,
        paddingHorizontal: 22,
        borderRadius: 7,
        marginTop: 16
    },
    reviewSubmitButtonText: {
        color: "#111111",
        fontSize: 15,
        fontWeight: "900"
    },

    // Already Reviewed
    reviewAlreadySubmitted: {
        backgroundColor: "#f5f5f5",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 7,
        padding: 18
    },
    reviewAlreadyTitle: {
        fontSize: 17,
        fontWeight: "900",
        color: "#181818",
        marginBottom: 5
    },
    reviewAlreadyText: {
        fontSize: 14,
        lineHeight: 21,
        color: "#666666"
    },

    // Review Card
    reviewCard: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 7,
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
        color: "#181818",
        marginBottom: 3
    },
    reviewDate: {
        fontSize: 12,
        color: "#888888"
    },
    reviewRatingBox: {
        minWidth: 76,
        backgroundColor: "#15803d",
        borderRadius: 5,
        paddingVertical: 7,
        paddingHorizontal: 10,
        alignItems: "center"
    },
    reviewRatingNumber: {
        color: "#ffffff",
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
        backgroundColor: "#181818",
        color: "#ffffff",
        minWidth: 30,
        textAlign: "center",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        fontSize: 12,
        fontWeight: "800"
    },
    reviewEditedText: {
        marginTop: 3,
        fontSize: 11,
        color: "#888888",
        fontStyle: "italic"
    },

    // Review Actions
    reviewActionRow: {
        flexDirection: "row",
        marginTop: 18
    },
    reviewEditButton: {
        backgroundColor: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#999999",
        marginRight: 10
    },
    reviewEditButtonText: {
        color: "#181818",
        fontWeight: "800"
    },
    reviewDeleteButton: {
        backgroundColor: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#dc2626"
    },
    reviewDeleteButtonText: {
        color: "#dc2626",
        fontWeight: "800"
    },

    // Edit Review
    editReviewContainer: {
        backgroundColor: "#f7f7f7",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 7,
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
        paddingVertical: 11,
        paddingHorizontal: 20,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#cccccc"
    },
    cancelEditButtonText: {
        color: "#444444",
        fontWeight: "800"
    },

    // My Reviews
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
        fontSize: 30,
        fontWeight: "900",
        color: "#181818"
    },
    myReviewsSubtitle: {
        marginTop: 6,
        fontSize: 14,
        color: "#666666"
    },

    // My Review Card
    myReviewCard: {
        backgroundColor: "#f5f5f5",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 7,
        padding: 18,
        marginBottom: 12
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
        fontSize: 19,
        fontWeight: "900",
        color: "#181818"
    },
    myReviewDate: {
        marginTop: 5,
        fontSize: 12,
        color: "#777777"
    },
    myReviewText: {
        fontSize: 14,
        lineHeight: 22,
        color: "#333333"
    },

    // Report Review
    reportReviewButton: {
        alignSelf: "flex-start",
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: "#dc2626",
        borderRadius: 5
    },
    reportReviewButtonText: {
        color: "#dc2626",
        fontSize: 13,
        fontWeight: "800"
    },

    // Report Modal
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
        borderRadius: 8,
        padding: 24
    },
    reportModalTitle: {
        fontSize: 24,
        fontWeight: "900",
        color: "#181818"
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
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 14,
        marginBottom: 8
    },
    reportReasonButtonSelected: {
        borderColor: "#ffb000",
        backgroundColor: "#fff8e1"
    },
    reportReasonText: {
        fontSize: 14,
        color: "#333333",
        fontWeight: "600"
    },
    reportReasonTextSelected: {
        color: "#181818",
        fontWeight: "900"
    },
    reportModalActions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 16
    },
    reportCancelButton: {
        paddingVertical: 11,
        paddingHorizontal: 18,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#cccccc",
        marginRight: 10
    },
    reportCancelButtonText: {
        color: "#444444",
        fontWeight: "800"
    },
    reportSubmitButton: {
        backgroundColor: "#ffb000",
        paddingVertical: 11,
        paddingHorizontal: 18,
        borderRadius: 6
    },
    reportSubmitButtonDisabled: {
        opacity: 0.4
    },
    reportSubmitButtonText: {
        color: "#111111",
        fontWeight: "900"
    },

    // Moderator Dashboard
    moderatorScroll: {
        flex: 1
    },
    moderatorScrollContent: {
        flexGrow: 1,
        paddingBottom: 50
    },
    moderatorContent: {
        width: "100%",
        maxWidth: 1000,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingTop: 30
    },
    moderatorHeading: {
        marginBottom: 24
    },
    moderatorTitle: {
        fontSize: 30,
        fontWeight: "900",
        color: "#181818"
    },
    moderatorSubtitle: {
        marginTop: 6,
        fontSize: 14,
        color: "#666666"
    },
    moderatorQueueHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
    },
    moderatorQueueTitle: {
        fontSize: 20,
        fontWeight: "900",
        color: "#181818"
    },
    moderatorCountBadge: {
        marginLeft: 10,
        backgroundColor: "#ffb000",
        minWidth: 28,
        height: 28,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8
    },
    moderatorCountText: {
        color: "#181818",
        fontSize: 13,
        fontWeight: "900"
    },

    // Moderation Report Card
    moderationReportCard: {
        backgroundColor: "#f5f5f5",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 6,
        padding: 18,
        marginBottom: 12
    },
    moderationReportHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 14
    },
    moderationReportInfo: {
        flex: 1,
        paddingRight: 12
    },
    moderationGameTitle: {
        fontSize: 18,
        fontWeight: "900",
        color: "#181818"
    },
    moderationReportedUser: {
        marginTop: 4,
        fontSize: 13,
        color: "#666666"
    },
    pendingStatusBadge: {
        backgroundColor: "#ffd66b",
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    pendingStatusText: {
        color: "#181818",
        fontSize: 11,
        fontWeight: "900"
    },
    moderationLabel: {
        marginTop: 4,
        fontSize: 11,
        fontWeight: "900",
        color: "#777777"
    },
    moderationValue: {
        marginTop: 4,
        fontSize: 15,
        color: "#333333"
    },
    moderationDate: {
        marginTop: 12,
        fontSize: 12,
        color: "#888888"
    },
    moderationOpenText: {
        marginTop: 14,
        color: "#b66f00",
        fontSize: 13,
        fontWeight: "900"
    },

    // Report Details
    reportDetailsCard: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 6,
        padding: 22
    },
    reportDetailsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    reportDetailsTitle: {
        fontSize: 24,
        fontWeight: "900",
        color: "#181818"
    },
    reportDetailsCloseButton: {
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 5
    },
    reportDetailsCloseText: {
        color: "#444444",
        fontWeight: "800"
    },
    reportDetailsRow: {
        borderBottomWidth: 1,
        borderBottomColor: "#eeeeee",
        paddingVertical: 11
    },
    reportDetailsLabel: {
        fontSize: 11,
        color: "#777777",
        fontWeight: "900"
    },
    reportDetailsValue: {
        marginTop: 4,
        fontSize: 15,
        color: "#222222",
        fontWeight: "600"
    },
    reportReviewSectionTitle: {
        marginTop: 24,
        marginBottom: 12,
        fontSize: 17,
        fontWeight: "900",
        color: "#181818"
    },

    // Reported Review
    reportedReviewBox: {
        backgroundColor: "#f5f5f5",
        borderWidth: 1,
        borderColor: "#dddddd",
        borderRadius: 6,
        padding: 16
    },
    reportedReviewHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    reportedReviewUsername: {
        fontSize: 15,
        fontWeight: "900",
        color: "#181818"
    },
    reportedReviewRating: {
        fontSize: 16,
        fontWeight: "900",
        color: "#dc2626"
    },
    reportedReviewText: {
        marginTop: 12,
        fontSize: 14,
        lineHeight: 21,
        color: "#333333"
    },
    reportedReviewDate: {
        marginTop: 12,
        fontSize: 11,
        color: "#888888"
    },

    // Moderation Actions
    moderationDecisionRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 24
    },
    dismissReportButton: {
        backgroundColor: "#ffffff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#999999",
        marginRight: 10,
        marginBottom: 10
    },
    dismissReportButtonText: {
        color: "#181818",
        fontWeight: "900"
    },
    removeReportedReviewButton: {
        backgroundColor: "#dc2626",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginBottom: 10
    },
    removeReportedReviewButtonText: {
        color: "#ffffff",
        fontWeight: "900"
    }
});

export default styles;