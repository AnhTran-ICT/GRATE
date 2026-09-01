import React, {useCallback,useState} from "react";
import {View,Text,ScrollView,TouchableOpacity,Alert,Platform} from "react-native";
import {useFocusEffect} from "@react-navigation/native";
import Header from "../components/Header";
import MyReviewCard from "../components/MyReviewCard";
import EditReviewForm from "../components/EditReviewForm";
import games from "../data/games";
import {getCurrentUser,getReviewsByUser,updateReview,deleteReview} from "../utils/storage";
import styles from "../styles/style";

export default function MyReviewsScreen({
    navigation
}) {
    const [currentUser, setCurrentUser] =
        useState(null);

    const [reviews, setReviews] =
        useState([]);

    const [editingReview, setEditingReview] =
        useState(null);

    function showMessage(
        title,
        message
    ) {
        if (Platform.OS === "web") {
            window.alert(
                `${title}\n\n${message}`
            );
        } else {
            Alert.alert(
                title,
                message
            );
        }
    }

    const loadReviews =
        useCallback(
            async () => {const user = await getCurrentUser();
                setCurrentUser(user);
                if (!user) {
                    setReviews([]);
                    return;
                }

                const userReviews = await getReviewsByUser(user.id);
                setReviews(
                    userReviews
                );
            },
            []
        );

    useFocusEffect(
        useCallback(() => {
            loadReviews();
        }, [loadReviews])
    );

    function findGame(gameId) {
        return games.find(
            game =>
                game.id === gameId
        );
    }

    async function handleUpdateReview(
        review,
        updatedData
    ) {
        if (!currentUser) {
            return;
        }

        const result =
            await updateReview(
                review.id,
                currentUser.id,
                updatedData
            );

        if (!result.success) {
            showMessage(
                "Update Failed",
                "Your review could not be updated."
            );
            return;
        }
        setEditingReview(null);
        await loadReviews();
        showMessage(
            "Review Updated",
            "Your review has been updated successfully."
        );
    }

    async function performDelete(review) {
        if (!currentUser) {
            return;
        }

        const result =
            await deleteReview(
                review.id,
                currentUser.id
            );

        if (!result.success) {
            showMessage(
                "Delete Failed",
                "Your review could not be deleted."
            );
            return;
        }
        setEditingReview(null);
        await loadReviews();
        showMessage(
            "Review Deleted",
            "Your review has been deleted successfully."
        );
    }

    function handleDeleteReview(review) {
        if (!currentUser) {
            return;
        }

        if (Platform.OS === "web") {
            const confirmed =
                window.confirm(
                    "Are you sure you want to delete this review?"
                );

            if (confirmed) {
                performDelete(
                    review
                );
            }
            return;
        }

        Alert.alert(
            "Delete Review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => performDelete(review)}
            ]
        );
    }

    function handleOpenGame(game) {
        if (!game) {
            return;
        }

        navigation.navigate(
            "GameDetail",
            {game}
        );
    }

    return (
        <View style={styles.page}>
            <Header
                navigation={navigation}
                showBack
            />

            <ScrollView
                style={styles.myReviewsScroll}
                contentContainerStyle={
                    styles.myReviewsScrollContent
                }
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.myReviewsContent}>
                    <View style={styles.myReviewsHeading}>
                        <Text style={styles.myReviewsTitle}>
                            My Reviews
                        </Text>

                        <Text style={styles.myReviewsSubtitle}>
                            View and manage the reviews you have submitted.
                        </Text>
                    </View>

                    {!currentUser ? (
                        <View style={styles.noReviewsCard}>
                            <Text style={styles.noReviewsTitle}>
                                Login required
                            </Text>

                            <Text style={styles.noReviewsText}>
                                You must be logged in to view your reviews.
                            </Text>

                            <TouchableOpacity
                                style={styles.primaryButton}
                                onPress={() => navigation.replace("Login")}
                            >

                                <Text style={styles.primaryButtonText}>
                                    Go to Login
                                </Text>
                            </TouchableOpacity>
                        </View>

                    ) : reviews.length === 0 ? (
                        <View style={styles.noReviewsCard}>
                            <Text style={styles.noReviewsTitle}>
                                No reviews yet
                            </Text>

                            <Text style={styles.noReviewsText}>
                                You have not reviewed any games yet.
                            </Text>

                            <TouchableOpacity
                                style={styles.primaryButton}
                                onPress={() =>navigation.navigate("GameCatalogue")}
                            >

                                <Text style={styles.primaryButtonText}>
                                    Browse Games
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        reviews.slice().reverse().map(review => {
                                const game =
                                    findGame(
                                        review.gameId
                                    );
                                if (
                                    editingReview &&editingReview.id === review.id) {
                                    return (
                                        <EditReviewForm
                                            key={review.id}
                                            review={review}
                                            onSave={handleUpdateReview}
                                            onCancel={() => setEditingReview(null)}
                                        />
                                    );
                                }

                                return (
                                    <MyReviewCard
                                        key={review.id}
                                        review={review}
                                        game={game}
                                        onEdit={setEditingReview}
                                        onDelete={handleDeleteReview}
                                        onOpenGame={handleOpenGame}
                                    />
                                );
                            })
                    )}
                </View>
            </ScrollView>
        </View>
    );
}