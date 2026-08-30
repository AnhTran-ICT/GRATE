import React,{useState} from "react";
import {Modal,View,Text,TouchableOpacity} from "react-native";
import styles from "../styles/style";

const REPORT_REASONS = [
    "Harassment or bullying",
    "Hate speech",
    "Spam",
    "Offensive content",
    "False or misleading information",
    "Other"
];

export default function ReportReviewModal({
    visible,
    review,
    onClose,
    onSubmit
}) {
    const [selectedReason,setSelectedReason] = useState(null);

    function handleClose() {
        setSelectedReason(null);
        onClose();
    }

    async function handleSubmit() {
        if (!selectedReason) {
            return;
        }

        const success = await onSubmit(
            review,
            selectedReason
        );

        if (success) {
            setSelectedReason(null);
        }
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={handleClose}
        >
            <View style={styles.reportModalOverlay}>
                <View style={styles.reportModalContainer}>
                    <Text style={styles.reportModalTitle}>
                        Report Review
                    </Text>

                    <Text style={styles.reportModalDescription}>
                        Select the reason you are reporting this review.
                    </Text>

                    {REPORT_REASONS.map(reason => (
                        <TouchableOpacity
                            key={reason}
                            style={[
                                styles.reportReasonButton,
                                selectedReason === reason &&
                                styles.reportReasonButtonSelected
                            ]}
                            onPress={() =>
                                setSelectedReason(reason)
                            }
                        >
                            <Text
                                style={[
                                    styles.reportReasonText,
                                    selectedReason === reason &&
                                    styles.reportReasonTextSelected
                                ]}
                            >
                                {reason}
                            </Text>
                        </TouchableOpacity>
                    ))}

                    <View style={styles.reportModalActions}>
                        <TouchableOpacity
                            style={styles.reportCancelButton}
                            onPress={handleClose}
                        >
                            <Text style={styles.reportCancelButtonText}>
                                Cancel
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.reportSubmitButton,
                                !selectedReason &&
                                styles.reportSubmitButtonDisabled
                            ]}
                            disabled={!selectedReason}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.reportSubmitButtonText}>
                                Submit Report
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}