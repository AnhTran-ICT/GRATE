import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import styles from "../styles/style";

export default function Header({
    navigation,
    showBack = false
}) {

    return (
        <View style={styles.header}>
            <View style={styles.headerSide}>
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

            <Text style={styles.headerLogo}>
                GRATE
            </Text>

            <View style={styles.headerSide} />
        </View>
    );
}