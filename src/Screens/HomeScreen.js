import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import Header from "../components/Header";
import LogoutButton from "../components/LogoutButton";
import styles from "../styles/style";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.page}>
            <Header
                navigation={navigation}
            />

            <View style={styles.homeHero}>
                <Text style={styles.homeLogo}>
                    GRATE
                </Text>

                <Text style={styles.homeHeadline}>
                    Discover games worth playing.
                </Text>

                <Text style={styles.homeDescription}>
                    Browse, rate and review games with scores
                    powered by the GRATE community.
                </Text>

                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() =>
                        navigation.navigate(
                            "GameCatalogue"
                        )
                    }
                >

                    <Text style={styles.primaryButtonText}>
                        Browse Games
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.homeFooter}>
                <LogoutButton
                    navigation={navigation}
                />
            </View>
        </View>
    );
}