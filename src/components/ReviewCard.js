import React from "react";
import {View,Text} from "react-native";
import styles from "../styles/style";

export default function ReviewCard({
    review
}) {
    function getRatingText() {
        if (review.rating >= 75) {
            return "Very Grate!";
        }

        if (review.rating >= 50) {
            return "Decent";
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
                            ? new Date(
                                review.createdAt
                            ).toLocaleDateString()
                            : ""}
                    </Text>
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
        </View>
    );
}