import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import styles from "../styles/style";

export default function Header({
    navigation,
    showBack = false,
    showMyReviews = true
}) {
    return (
        <View style={styles.header}>
            <View style={styles.headerSide}>
                {showBack && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.headerIcon}>←</Text>
                    </TouchableOpacity>
                )}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.headerLogo}>GRATE</Text>
            </TouchableOpacity>
            <View style={styles.headerSide}>
                {showMyReviews && (
                    <TouchableOpacity onPress={() => navigation.navigate("MyReviews")}>
                        <Text style={styles.headerMyReviews}>My Reviews</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}