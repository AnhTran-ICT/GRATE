import React, {useState} from "react";
import {View,Text,TextInput,TouchableOpacity,Alert,Platform} from "react-native";
import styles from "../styles/style";

export default function EditReviewForm({
    review,
    onSave,
    onCancel
}) {
    const [rating, setRating] =
        useState(
            String(review.rating)
        );

    const [reviewText, setReviewText] =
        useState(
            review.reviewText
        );

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

    async function handleSave() {
        if (
            !rating ||
            !reviewText.trim()
        ) {
            showMessage(
                "Validation Error",
                "Rating and review are required."
            );
            return;
        }

        const numericRating =
            Number(rating);
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

        await onSave(
            review,
            {
                rating: numericRating,
                reviewText:
                    reviewText.trim()
            }
        );
    }

    return (
        <View style={styles.editReviewContainer}>
            <Text style={styles.reviewInputLabel}>
                EDIT RATING
            </Text>

            <View style={styles.ratingInputRow}>
                <TextInput
                    style={styles.ratingInput}
                    value={rating}
                    onChangeText={setRating}
                    keyboardType="numeric"
                    maxLength={3}
                />

                <Text style={styles.ratingOutOf}>
                    / 100
                </Text>
            </View>

            <Text style={styles.reviewInputLabel}>
                EDIT REVIEW
            </Text>

            <TextInput
                style={styles.reviewTextArea}
                value={reviewText}
                onChangeText={setReviewText}
                multiline
                numberOfLines={5}
                textAlignVertical="top"
                maxLength={1000}
            />

            <View style={styles.reviewCharacterRow}>
                <Text style={styles.reviewCharacterCount}>
                    {reviewText.length}/1000
                </Text>
            </View>

            <View style={styles.editReviewActionRow}>
                <TouchableOpacity
                    style={styles.reviewSubmitButton}
                    onPress={handleSave}
                >

                    <Text style={styles.reviewSubmitButtonText}>
                        Save Changes
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cancelEditButton}
                    onPress={onCancel}
                >
                    <Text style={styles.cancelEditButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}