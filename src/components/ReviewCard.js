import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import styles from "../styles/style";

export default function ReviewCard({
    review,
    currentUser,
    onEdit,
    onDelete,
    onReport
}) {
    const isOwner =
        currentUser &&
        review.userId === currentUser.id;

    const canReport =
        currentUser &&
        !isOwner;

    function getRatingText() {
        if (review.rating >= 75) {
            return "Very Grate!";
        }

        if (review.rating >= 50) {
            return "AveGrate";
        }

        return "Not Grate";
    }

    return (
        <View style={styles.reviewCard}>
            <View style={styles.reviewCardHeader}>
                <View>
                    <Text style={styles.reviewUsername}>
                        {review.username}
                    </Text>

                    <Text style={styles.reviewDate}>
                        {review.createdAt
                            ? new Date(review.createdAt).toLocaleDateString()
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
                        {getRatingText()}
                    </Text>
                </View>
            </View>

            <Text style={styles.reviewBody}>
                {review.reviewText}
            </Text>

            {isOwner && (
                <View style={styles.reviewActionRow}>
                    <TouchableOpacity
                        style={styles.reviewEditButton}
                        onPress={() => onEdit(review)}
                    >
                        <Text style={styles.reviewEditButtonText}>
                            Edit
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.reviewDeleteButton}
                        onPress={() => onDelete(review)}
                    >
                        <Text style={styles.reviewDeleteButtonText}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            {canReport && (
                <TouchableOpacity
                    style={styles.reportReviewButton}
                    onPress={() => onReport(review)}
                >
                    <Text style={styles.reportReviewButtonText}>
                        Report Review
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}