import React from "react";
import {TouchableOpacity,Text} from "react-native";
import styles from "../styles/style.js";
import GrateScore from "./GrateScore";

export default function GameCard({game,navigation}){

return (
    <TouchableOpacity
        style={styles.gameCard}
        onPress={()=> navigation.navigate(
            "GameDetail",
            {
                game:game
            }   
        )}
    >

        <Text style={styles.gameTitle}>
            {game.title}
        </Text>

        <Text style={styles.gameInfo}>
            {game.genre}
        </Text>

        <Text style={styles.gameInfo}>
            {game.platform}
        </Text>

        <GrateScore
            score={game.score}
        />

    </TouchableOpacity>
);
}