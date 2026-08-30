import React from "react";
import {View,Text} from "react-native";
import styles from "../styles/style.js";
import GrateScore from "../components/GrateScore";

export default function GameDetailScreen({route}){
    const {game}=route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.detailTitle}>
                {game.title}
            </Text>

            <Text>
                Genre: {game.genre}
            </Text>

            <Text>
                Platform: {game.platform}
            </Text>

            <Text>
                Developer: {game.developer}
            </Text>

            <GrateScore
                score={game.score}
            />

            <Text style={styles.description}>
                {game.description}
            </Text>
        </View>
    );
}