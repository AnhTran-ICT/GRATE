import React from "react";
import {View,Text} from "react-native";
import LogoutButton from "../components/LogoutButton";
import styles from "../styles/style";

export default function ModeratorDashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>
                Moderator Dashboard
            </Text>

            <Text style={styles.welcomeText}>
                Review reports and manage inappropriate content.
            </Text>
            
            <LogoutButton
                navigation={navigation}
            />
        </View>
    );
}