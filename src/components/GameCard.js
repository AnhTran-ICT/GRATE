import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import GrateScore from "./GrateScore";
import styles from "../styles/style";

export default function GameCard({
    game,
    navigation
}) {
    return (
        <TouchableOpacity
            style={styles.gameCard}
            onPress={() =>
                navigation.navigate(
                    "GameDetail",
                    { game }
                )
            }
        >

            <View style={styles.gameCoverPlaceholder}>
                <Text style={styles.gameCoverLetter}>
                    {game.title.charAt(0)}
                </Text>
            </View>

            <View style={styles.gameCardContent}>
                <Text
                    style={styles.gameTitle}
                    numberOfLines={1}
                >
                    {game.title}
                </Text>

                <Text style={styles.gameMeta}>
                    {game.genre}
                </Text>

                <Text style={styles.gameMeta}>
                    {game.platform}
                </Text>
            </View>

            <GrateScore
                score={game.score}
            />
        </TouchableOpacity>
    );
}