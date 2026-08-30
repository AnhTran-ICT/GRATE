import React, {useState} from "react";
import {View,Text,TextInput,TouchableOpacity,Alert,Platform} from "react-native";
import styles from "../styles/style";

export default function ReviewForm({
    onSubmit,
    alreadyReviewed
}) {
    const [rating, setRating] = useState("");
    const [reviewText, setReviewText] = useState("");

    function showMessage(title, message) {
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

    async function handleSubmit() {
        if (alreadyReviewed) {
            showMessage(
                "Review Already Submitted",
                "You can only submit one review for each game."
            );
            return;
        }

        if (!rating || !reviewText.trim()) {
            showMessage(
                "Validation Error",
                "Rating and review are required."
            );
            return;
        }

        const numericRating = Number(rating);
        if (
            Number.isNaN(numericRating) ||
            numericRating < 1 ||
            numericRating > 100
        ) {
            showMessage(
                "Validation Error",
                "Rating must be between 1 and 100."
            );
            return;
        }

        const success =
            await onSubmit({
                rating: numericRating,
                reviewText: reviewText.trim()
            });

        if (success) {
            setRating("");
            setReviewText("");
            showMessage(
                "Review Submitted",
                "Your rating and review have been added successfully."
            );
        }
    }

    if (alreadyReviewed) {
        return (
            <View style={styles.reviewAlreadySubmitted}>
                <Text style={styles.reviewAlreadyTitle}>
                    Review submitted
                </Text>

                <Text style={styles.reviewAlreadyText}>
                    You have already reviewed this game.
                    Editing and deleting reviews will be available in the next feature.
                </Text>
            </View>
        );
    }

    return (
        <View>
            <Text style={styles.reviewInputLabel}>
                YOUR RATING
            </Text>

            <View style={styles.ratingInputRow}>
                <TextInput
                    style={styles.ratingInput}
                    placeholder="1 - 100"
                    keyboardType="numeric"
                    value={rating}
                    onChangeText={setRating}
                    maxLength={3}
                />

                <Text style={styles.ratingOutOf}>
                    / 100
                </Text>
            </View>

            <Text style={styles.reviewInputLabel}>
                YOUR REVIEW
            </Text>

            <TextInput
                style={styles.reviewTextArea}
                placeholder="Share your thoughts about this game..."
                placeholderTextColor="#888888"
                multiline
                numberOfLines={5}
                value={reviewText}
                onChangeText={setReviewText}
                textAlignVertical="top"
                maxLength={1000}
            />

            <View style={styles.reviewCharacterRow}>
                <Text style={styles.reviewCharacterCount}>
                    {reviewText.length}/1000
                </Text>
            </View>

            <TouchableOpacity
                style={styles.reviewSubmitButton}
                onPress={handleSubmit}
            >
                <Text style={styles.reviewSubmitButtonText}>
                    Submit Review
                </Text>
            </TouchableOpacity>
        </View>
    );
}