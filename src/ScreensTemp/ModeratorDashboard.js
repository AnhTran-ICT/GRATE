import React,{useCallback,useState} from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    Platform
} from "react-native";
import {useFocusEffect} from "@react-navigation/native";
import Header from "../components/Header";
import {
    getCurrentUser,
    getPendingReports,
    getReviewById,
    dismissReport,
    removeReportedReview
} from "../utils/storage";
import games from "../data/games";
import styles from "../styles/style";

export default function ModeratorDashboard({navigation}) {
    const [currentUser,setCurrentUser] = useState(null);
    const [reports,setReports] = useState([]);
    const [selectedReport,setSelectedReport] = useState(null);
    const [selectedReview,setSelectedReview] = useState(null);

    function showMessage(title,message) {
        if(Platform.OS === "web") {
            window.alert(`${title}\n\n${message}`);
        }
        else {
            Alert.alert(title,message);
        }
    }

    const loadReports = useCallback(async() => {
        const user = await getCurrentUser();
        setCurrentUser(user);

        if(!user || user.role !== "moderator") {
            setReports([]);
            return;
        }

        const pendingReports = await getPendingReports();
        setReports(pendingReports);
    },[]);

    useFocusEffect(
        useCallback(() => {
            loadReports();
        },[loadReports])
    );

    function findGame(gameId) {
        return games.find(
            game => game.id === gameId
        );
    }

    async function handleOpenReport(report) {
        const review = await getReviewById(
            report.reviewId
        );

        setSelectedReport(report);
        setSelectedReview(review);
    }

    async function handleDismissReport() {
        if(
            !currentUser ||
            !selectedReport
        ) {
            return;
        }

        const result = await dismissReport(
            selectedReport.id,
            currentUser.id
        );

        if(!result.success) {
            showMessage(
                "Action Failed",
                "The report could not be dismissed."
            );
            return;
        }

        setSelectedReport(null);
        setSelectedReview(null);

        await loadReports();

        showMessage(
            "Report Dismissed",
            "The report has been dismissed. The review remains published."
        );
    }

    async function performRemoveReview() {
        if(
            !currentUser ||
            !selectedReport
        ) {
            return;
        }

        const result = await removeReportedReview(
            selectedReport.id,
            currentUser.id
        );

        if(!result.success) {
            showMessage(
                "Action Failed",
                "The reported review could not be removed."
            );
            return;
        }

        setSelectedReport(null);
        setSelectedReview(null);

        await loadReports();

        showMessage(
            "Review Removed",
            "The review has been removed and the report has been actioned."
        );
    }

    function handleRemoveReview() {
        if(
            !currentUser ||
            !selectedReport
        ) {
            return;
        }

        if(Platform.OS === "web") {
            const confirmed = window.confirm(
                "Remove this review? This will hide it from GRATE and action the report."
            );

            if(confirmed) {
                performRemoveReview();
            }

            return;
        }

        Alert.alert(
            "Remove Review",
            "Are you sure you want to remove this review?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Remove",
                    style: "destructive",
                    onPress: performRemoveReview
                }
            ]
        );
    }

    if(!currentUser) {
        return (
            <View style={styles.page}>
                <Header navigation={navigation}/>
                <View style={styles.moderatorContent}>
                    <Text style={styles.emptyStateTitle}>
                        Loading...
                    </Text>
                </View>
            </View>
        );
    }

    if(currentUser.role !== "moderator") {
        return (
            <View style={styles.page}>
                <Header navigation={navigation}/>
                <View style={styles.moderatorContent}>
                    <View style={styles.noReviewsCard}>
                        <Text style={styles.noReviewsTitle}>
                            Access Denied
                        </Text>
                        <Text style={styles.noReviewsText}>
                            Only moderators can access the moderation dashboard.
                        </Text>
                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={() =>
                                navigation.replace("Home")
                            }
                        >
                            <Text style={styles.primaryButtonText}>
                                Return Home
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.page}>
            <Header navigation={navigation}/>

            <ScrollView
                style={styles.moderatorScroll}
                contentContainerStyle={styles.moderatorScrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.moderatorContent}>
                    <View style={styles.moderatorHeading}>
                        <Text style={styles.moderatorTitle}>
                            Moderation Queue
                        </Text>
                        <Text style={styles.moderatorSubtitle}>
                            Review reports submitted by GRATE users.
                        </Text>
                    </View>

                    <View style={styles.moderatorQueueHeader}>
                        <Text style={styles.moderatorQueueTitle}>
                            Pending Reports
                        </Text>

                        <View style={styles.moderatorCountBadge}>
                            <Text style={styles.moderatorCountText}>
                                {reports.length}
                            </Text>
                        </View>
                    </View>

                    {reports.length === 0 ? (
                        <View style={styles.noReviewsCard}>
                            <Text style={styles.noReviewsTitle}>
                                No pending reports
                            </Text>
                            <Text style={styles.noReviewsText}>
                                There are currently no reports waiting for moderation.
                            </Text>
                        </View>
                    ) : (
                        reports
                            .slice()
                            .reverse()
                            .map(report => {
                                const game = findGame(
                                    report.gameId
                                );

                                return (
                                    <TouchableOpacity
                                        key={report.id}
                                        style={styles.moderationReportCard}
                                        onPress={() =>
                                            handleOpenReport(report)
                                        }
                                    >
                                        <View style={styles.moderationReportHeader}>
                                            <View style={styles.moderationReportInfo}>
                                                <Text style={styles.moderationGameTitle}>
                                                    {game?.title || "Unknown Game"}
                                                </Text>

                                                <Text style={styles.moderationReportedUser}>
                                                    Reported user: {report.reportedUsername || "Unknown User"}
                                                </Text>
                                            </View>

                                            <View style={styles.pendingStatusBadge}>
                                                <Text style={styles.pendingStatusText}>
                                                    {report.status}
                                                </Text>
                                            </View>
                                        </View>

                                        <Text style={styles.moderationLabel}>
                                            Reason
                                        </Text>

                                        <Text style={styles.moderationValue}>
                                            {report.reason}
                                        </Text>

                                        <Text style={styles.moderationDate}>
                                            {report.createdAt
                                                ? new Date(report.createdAt).toLocaleDateString()
                                                : ""}
                                        </Text>

                                        <Text style={styles.moderationOpenText}>
                                            Open Report Details →
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })
                    )}

                    {selectedReport && (
                        <View style={styles.reportDetailsCard}>
                            <View style={styles.reportDetailsHeader}>
                                <Text style={styles.reportDetailsTitle}>
                                    Report Details
                                </Text>

                                <TouchableOpacity
                                    style={styles.reportDetailsCloseButton}
                                    onPress={() => {
                                        setSelectedReport(null);
                                        setSelectedReview(null);
                                    }}
                                >
                                    <Text style={styles.reportDetailsCloseText}>
                                        Close
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.reportDetailsRow}>
                                <Text style={styles.reportDetailsLabel}>
                                    Game
                                </Text>
                                <Text style={styles.reportDetailsValue}>
                                    {findGame(selectedReport.gameId)?.title || "Unknown Game"}
                                </Text>
                            </View>

                            <View style={styles.reportDetailsRow}>
                                <Text style={styles.reportDetailsLabel}>
                                    Reported User
                                </Text>
                                <Text style={styles.reportDetailsValue}>
                                    {selectedReport.reportedUsername || "Unknown User"}
                                </Text>
                            </View>

                            <View style={styles.reportDetailsRow}>
                                <Text style={styles.reportDetailsLabel}>
                                    Reported By
                                </Text>
                                <Text style={styles.reportDetailsValue}>
                                    {selectedReport.reporterUsername || "Unknown User"}
                                </Text>
                            </View>

                            <View style={styles.reportDetailsRow}>
                                <Text style={styles.reportDetailsLabel}>
                                    Reason
                                </Text>
                                <Text style={styles.reportDetailsValue}>
                                    {selectedReport.reason}
                                </Text>
                            </View>

                            <View style={styles.reportDetailsRow}>
                                <Text style={styles.reportDetailsLabel}>
                                    Status
                                </Text>
                                <Text style={styles.reportDetailsValue}>
                                    {selectedReport.status}
                                </Text>
                            </View>

                            <Text style={styles.reportReviewSectionTitle}>
                                Reported Review
                            </Text>

                            {selectedReview ? (
                                <View style={styles.reportedReviewBox}>
                                    <View style={styles.reportedReviewHeader}>
                                        <Text style={styles.reportedReviewUsername}>
                                            {selectedReview.username}
                                        </Text>

                                        <Text style={styles.reportedReviewRating}>
                                            {selectedReview.rating}/100
                                        </Text>
                                    </View>

                                    <Text style={styles.reportedReviewText}>
                                        {selectedReview.reviewText}
                                    </Text>

                                    <Text style={styles.reportedReviewDate}>
                                        {selectedReview.createdAt
                                            ? new Date(selectedReview.createdAt).toLocaleDateString()
                                            : ""}
                                    </Text>
                                </View>
                            ) : (
                                <View style={styles.noReviewsCard}>
                                    <Text style={styles.noReviewsTitle}>
                                        Review unavailable
                                    </Text>
                                </View>
                            )}

                            <View style={styles.moderationDecisionRow}>
                                <TouchableOpacity
                                    style={styles.dismissReportButton}
                                    onPress={handleDismissReport}
                                >
                                    <Text style={styles.dismissReportButtonText}>
                                        Dismiss Report
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.removeReportedReviewButton}
                                    onPress={handleRemoveReview}
                                >
                                    <Text style={styles.removeReportedReviewButtonText}>
                                        Remove Review
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}