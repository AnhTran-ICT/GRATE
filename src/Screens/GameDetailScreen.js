import React, {useCallback,useState} from "react";
import {View,Text,ScrollView,TouchableOpacity,Alert,Platform} from "react-native";
import {useFocusEffect} from "@react-navigation/native";
import Header from "../components/Header";
import GrateScore from "../components/GrateScore";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";
import {getCurrentUser,getReviewsForGame,addReview} from "../utils/storage";
import styles from "../styles/style";

export default function GameDetailScreen({
    route,
    navigation
}) {
    const game =
        route.params?.game;

    const [currentUser, setCurrentUser] =
        useState(null);

    const [reviews, setReviews] =
        useState([]);

    function showMessage(
        title,
        message
    ) {
        if (Platform.OS === "web") {
            window.alert(
                `${title}\n\n${message}`
            );
        }
        else {
            Alert.alert(
                title,
                message
            );
        }
    }

    const loadGameData =
        useCallback(
            async () => {
                if (!game) {
                    return;
                }
                const user =
                    await getCurrentUser();

                const gameReviews =
                    await getReviewsForGame(
                        game.id
                    );
                setCurrentUser(user);
                setReviews(gameReviews);
            },
            [game]
        );

    useFocusEffect(
        useCallback(() => {
            loadGameData();
        }, [loadGameData])
    );

    if (!game) {
        return (
            <View style={styles.page}>
                <Header
                    navigation={navigation}
                    showBack
                />

                <View style={styles.gameDetailContent}>
                    <Text style={styles.emptyStateTitle}>
                        Game not found
                    </Text>

                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() =>
                            navigation.navigate(
                                "GameCatalogue"
                            )
                        }
                    >
                        <Text style={styles.primaryButtonText}>
                            Back to Games
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const alreadyReviewed =
        currentUser
            ? reviews.some(
                review =>
                    review.userId ===
                    currentUser.id
            )
            : false;

    const communityScore =
        reviews.length > 0
            ? Math.round(
                reviews.reduce(
                    (total, review) =>
                        total +
                        review.rating,
                    0
                ) /
                reviews.length
            )
            : game.score;

    function getRatingLabel() {
        if (communityScore >= 75) {
            return "Very Grate!";
        }
        if (communityScore >= 50) {
            return "Decent";
        }
        return "Not Grate";
    }

    function getRatingDescription() {
        if (communityScore >= 75) {
            return "Highly rated by the GRATE community.";
        }
        if (communityScore >= 50) {
            return "Mixed opinions from the GRATE community.";
        }
        return "Not recommended by most of the GRATE community.";
    }

    async function handleSubmitReview({
        rating,
        reviewText
    }) {
        if (!currentUser) {
            showMessage(
                "Login Required",
                "You must be logged in to submit a review."
            );
            return false;
        }

        const newReview = {
            id: Date.now().toString(),
            gameId: game.id,
            userId: currentUser.id,
            username:
                currentUser.username ||
                currentUser.email,
            rating: rating,
            reviewText: reviewText,
            createdAt:
                new Date().toISOString()
        };

        const result =
            await addReview(
                newReview
            );

        if (!result.success) {
            if (
                result.reason ===
                "duplicate"
            ) {
                showMessage(
                    "Review Already Submitted",
                    "You can only submit one review for each game."
                );
            }
            return false;
        }
        await loadGameData();
        return true;
    }

    return (
        <View style={styles.page}>
            <Header
                navigation={navigation}
                showBack
            />

            <ScrollView
                style={styles.gameDetailScroll}
                contentContainerStyle={
                    styles.gameDetailScrollContent
                }
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.gameDetailContent}>

                    {/* HERO */}
                    <View style={styles.gameHero}>
                        <View style={styles.gameHeroCover}>
                            <Text style={styles.gameHeroLetter}>
                                {game.title.charAt(0)}
                            </Text>
                        </View>

                        <View style={styles.gameHeroInformation}>
                            <Text style={styles.gameDetailTitle}>
                                {game.title}
                            </Text>

                            <View style={styles.gameTagRow}>
                                <View style={styles.gameTag}>
                                    <Text style={styles.gameTagText}>
                                        {game.genre}
                                    </Text>
                                </View>

                                <View style={styles.gameTag}>
                                    <Text style={styles.gameTagText}>
                                        {game.platform}
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.gameDeveloper}>
                                Developer: {game.developer}
                            </Text>
                        </View>
                    </View>

                    {/* SCORE */}
                    <View style={styles.detailSection}>
                        <Text style={styles.detailSectionLabel}>
                            GRATE SCORE
                        </Text>

                        <View style={styles.detailScoreRow}>
                            <GrateScore
                                score={communityScore}
                            />

                            <View style={styles.detailScoreInformation}>
                                <Text style={styles.detailRatingTitle}>
                                    {getRatingLabel()}
                                </Text>

                                <Text style={styles.detailRatingDescription}>
                                    {getRatingDescription()}
                                </Text>

                                <Text style={styles.detailScoreValue}>
                                    Community Score: {communityScore}/100
                                </Text>

                                <Text style={styles.reviewCountText}>
                                    {reviews.length}
                                    {" "}
                                    {reviews.length === 1
                                        ? "review"
                                        : "reviews"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* ABOUT */}
                    <View style={styles.detailSection}>
                        <Text style={styles.detailSectionLabel}>
                            ABOUT THIS GAME
                        </Text>

                        <Text style={styles.gameDescription}>
                            {game.description}
                        </Text>
                    </View>

                    {/* INFORMATION */}
                    <View style={styles.detailSection}>
                        <Text style={styles.detailSectionLabel}>
                            GAME INFORMATION
                        </Text>

                        <View style={styles.informationRow}>
                            <Text style={styles.informationLabel}>
                                Genre
                            </Text>

                            <Text style={styles.informationValue}>
                                {game.genre}
                            </Text>
                        </View>

                        <View style={styles.informationRow}>
                            <Text style={styles.informationLabel}>
                                Platform
                            </Text>

                            <Text style={styles.informationValue}>
                                {game.platform}
                            </Text>
                        </View>

                        <View style={styles.informationRow}>
                            <Text style={styles.informationLabel}>
                                Developer
                            </Text>

                            <Text style={styles.informationValue}>
                                {game.developer}
                            </Text>
                        </View>

                        <View style={styles.informationRow}>
                            <Text style={styles.informationLabel}>
                                GRATE Score
                            </Text>

                            <Text style={styles.informationValue}>
                                {communityScore}/100
                            </Text>
                        </View>
                    </View>

                    {/* WRITE REVIEW */}
                    <View style={styles.detailSection}>
                        <Text style={styles.detailSectionLabel}>
                            WRITE A REVIEW
                        </Text>

                        <ReviewForm
                            onSubmit={
                                handleSubmitReview
                            }
                            alreadyReviewed={
                                alreadyReviewed
                            }
                        />
                    </View>

                    {/* COMMUNITY REVIEWS */}
                    <View style={styles.detailSection}>
                        <View style={styles.communityHeader}>
                            <Text style={styles.detailSectionLabel}>
                                COMMUNITY REVIEWS
                            </Text>

                            <Text style={styles.communityReviewCount}>
                                {reviews.length}
                            </Text>
                        </View>

                        {reviews.length === 0 ? (
                            <View style={styles.noReviewsCard}>
                                <Text style={styles.noReviewsTitle}>
                                    No reviews yet
                                </Text>

                                <Text style={styles.noReviewsText}>
                                    Be the first member of the GRATE community to review this game.
                                </Text>
                            </View>
                        ) : (
                            reviews
                                .slice()
                                .reverse()
                                .map(review => (
                                    <ReviewCard
                                        key={review.id}
                                        review={review}
                                    />
                                ))
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}