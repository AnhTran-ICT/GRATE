import React from "react";
import {View,Text,ScrollView,TouchableOpacity} from "react-native";
import Header from "../components/Header";
import GrateScore from "../components/GrateScore";
import styles from "../styles/style";

export default function GameDetailScreen({
    route,
    navigation
}) {
    const game = route.params?.game;

    if (!game) {
        return (
            <View style={styles.page}>
                <Header
                    navigation={navigation}
                    showBack
                />

                <View style={styles.gameDetailContent}>
                    <Text style={styles.emptyStateTitle}>
                        Game not found
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
                            Back to Games
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function getRatingLabel() {
        if (game.score >= 75) {
            return "Very Grate!";
        }
        else if (game.score >= 50) {
            return "Decent";
        }
        return "Not Grate";
    }

    function getRatingDescription() {
        if (game.score >= 75) {
            return "Highly rated by the GRATE community.";
        }
        else if (game.score >= 50) {
            return "Mixed opinions from the GRATE community.";
        }
        return "Not recommended by most of the GRATE community.";
    }

    return (
        <View style={styles.page}>
            <Header
                navigation={navigation}
                showBack
            />

            <ScrollView
                style={styles.gameDetailScroll}
                contentContainerStyle={styles.gameDetailScrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.gameDetailContent}>

                    {/* HERO */}
                    <View style={styles.gameHero}>
                        <View style={styles.gameHeroCover}>
                            <Text style={styles.gameHeroLetter}>
                                {game.title.charAt(0)}
                            </Text>
                        </View>

                        <View style={styles.gameHeroInformation}>
                            <Text style={styles.gameDetailTitle}>
                                {game.title}
                            </Text>
                            <View style={styles.gameTagRow}>

                                <View style={styles.gameTag}>
                                    <Text style={styles.gameTagText}>
                                        {game.genre}
                                    </Text>
                                </View>

                                <View style={styles.gameTag}>
                                    <Text style={styles.gameTagText}>
                                        {game.platform}
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.gameDeveloper}>
                                Developer: {game.developer}
                            </Text>
                        </View>
                    </View>

                    {/* SCORE */}
                    <View style={styles.detailSection}>
                        <Text style={styles.detailSectionLabel}>
                            GRATE SCORE
                        </Text>

                        <View style={styles.detailScoreRow}>
                            <GrateScore
                                score={game.score}
                            />

                            <View style={styles.detailScoreInformation}>
                                <Text style={styles.detailRatingTitle}>
                                    {getRatingLabel()}
                                </Text>

                                <Text style={styles.detailRatingDescription}>
                                    {getRatingDescription()}
                                </Text>

                                <Text style={styles.detailScoreValue}>
                                    Community Score: {game.score}/100
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* ABOUT */}
                    <View style={styles.detailSection}>
                        <Text style={styles.detailSectionLabel}>
                            ABOUT THIS GAME
                        </Text>

                        <Text style={styles.gameDescription}>
                            {game.description}
                        </Text>
                    </View>

                    {/* GAME INFORMATION */}
                    <View style={styles.detailSection}>
                        <Text style={styles.detailSectionLabel}>
                            GAME INFORMATION
                        </Text>

                        <View style={styles.informationRow}>
                            <Text style={styles.informationLabel}>
                                Genre
                            </Text>

                            <Text style={styles.informationValue}>
                                {game.genre}
                            </Text>
                        </View>

                        <View style={styles.informationRow}>
                            <Text style={styles.informationLabel}>
                                Platform
                            </Text>

                            <Text style={styles.informationValue}>
                                {game.platform}
                            </Text>
                        </View>

                        <View style={styles.informationRow}>
                            <Text style={styles.informationLabel}>
                                Developer
                            </Text>

                            <Text style={styles.informationValue}>
                                {game.developer}
                            </Text>
                        </View>

                        <View style={styles.informationRow}>
                            <Text style={styles.informationLabel}>
                                GRATE Score
                            </Text>

                            <Text style={styles.informationValue}>
                                {game.score}/100
                            </Text>
                        </View>
                    </View>

                    {/* US6 PLACEHOLDER */}
                    <View style={styles.detailSection}>
                        <View style={styles.communityHeader}>
                            <Text style={styles.detailSectionLabel}>
                                COMMUNITY REVIEWS
                            </Text>

                            <Text style={styles.comingSoonText}>
                                Coming soon
                            </Text>
                        </View>

                        <View style={styles.noReviewsCard}>
                            <Text style={styles.noReviewsTitle}>
                                Community reviews
                            </Text>

                            <Text style={styles.noReviewsText}>
                                Player ratings and reviews will appear here.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}