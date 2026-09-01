import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import styles from "../styles/style";

export default function MyReviewCard({
    review,
    game,
    onEdit,
    onDelete,
    onOpenGame
}) {
    function getRatingLabel() {
        if (review.rating >= 75) {
            return "Very Grate!";
        }
        else if (review.rating >= 50) {
            return "AveGrate";
        }
        return "Not Grate";
    }

    return (
        <View style={styles.myReviewCard}>
            <View style={styles.myReviewCardHeader}>
                <View style={styles.myReviewGameInfo}>
                    <TouchableOpacity
                        onPress={() =>
                            onOpenGame(game)
                        }
                    >
                        <Text style={styles.myReviewGameTitle}>
                            {game?.title || "Unknown Game"}
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.myReviewDate}>
                        {review.createdAt
                            ? new Date(
                                review.createdAt
                            ).toLocaleDateString()
                            : ""}
                    </Text>

                    {review.updatedAt && (
                        <Text style={styles.reviewEditedText}>
                            Edited
                        </Text>
                    )}
                </View>

                <View style={styles.reviewRatingBox}>
                    <Text style={styles.reviewRatingNumber}>
                        {review.rating}
                    </Text>

                    <Text style={styles.reviewRatingLabel}>
                        {getRatingLabel()}
                    </Text>
                </View>
            </View>

            <Text style={styles.myReviewText}>
                {review.reviewText}
            </Text>

            <View style={styles.reviewActionRow}>
                <TouchableOpacity
                    style={styles.reviewEditButton}
                    onPress={() =>
                        onEdit(review)
                    }
                >
                    <Text style={styles.reviewEditButtonText}>
                        Edit
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.reviewDeleteButton}
                    onPress={() =>
                        onDelete(review)
                    }
                >

                    <Text style={styles.reviewDeleteButtonText}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}