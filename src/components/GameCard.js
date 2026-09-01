import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import GrateScore from "./GrateScore";
import styles from "../styles/style";

export default function GameCard({game,navigation}) {
    return (
        <TouchableOpacity
            style={styles.gameCard}
            activeOpacity={0.85}
            onPress={() =>
                navigation.navigate(
                    "GameDetail",
                    {game}
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
                <View style={styles.gameTagRowSmall}>
                    <View style={styles.smallGameTag}>
                        <Text style={styles.smallGameTagText}>
                            {game.platform}
                        </Text>
                    </View>
                    <View style={styles.smallGameTag}>
                        <Text style={styles.smallGameTagText}>
                            {game.genre}
                        </Text>
                    </View>
                </View>
                <Text style={styles.gameDeveloperCard}>
                    {game.developer}
                </Text>
            </View>
            <View style={styles.gameCardScore}>
                <GrateScore
                    score={game.score}
                    size="small"
                />
                <Text style={styles.communityScoreSmall}>
                    Community Score
                </Text>
            </View>
        </TouchableOpacity>
    );
}