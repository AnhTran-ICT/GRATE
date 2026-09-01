import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import {logoutUser} from "../utils/auth";
import styles from "../styles/style";

export default function Header({
    navigation,
    showBack = false,
    showMyReviews = true,
    showLogout = true
}) {
    async function handleLogout() {
        await logoutUser();
        navigation.replace("Login");
    }

    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                {showBack && (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.headerIcon}>
                            ←
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.headerLogo}>
                    GRATE
                </Text>
            </TouchableOpacity>

            <View style={styles.headerActions}>
                {showMyReviews && (
                    <TouchableOpacity
                        style={styles.headerMyReviewsButton}
                        onPress={() =>
                            navigation.navigate("MyReviews")
                        }
                    >
                        <Text style={styles.headerMyReviews}>
                            My Reviews
                        </Text>
                    </TouchableOpacity>
                )}

                {showLogout && (
                    <TouchableOpacity
                        style={styles.headerLogoutButton}
                        onPress={handleLogout}
                    >
                        <Text style={styles.headerLogoutText}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}