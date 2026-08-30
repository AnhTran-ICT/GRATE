import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import styles from "../styles/style";
import LogoutButton from "../components/LogoutButton";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>
                GRATE
            </Text>

            <Text style={styles.subtitle}>
                Game Rating Platform
            </Text>

            <Text style={styles.welcomeText}>
                Welcome to the Game Rating Platform
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate("GameCatalogue")
                }>

                <Text style={styles.buttonText}>
                    Browse Games
                </Text>
            </TouchableOpacity>

            <LogoutButton
                navigation={navigation}
            />
        </View>

    );
}