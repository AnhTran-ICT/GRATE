import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native";
import Header from "../components/Header";
import GrateScore from "../components/GrateScore";
import games from "../data/games";
import styles from "../styles/style";

export default function HomeScreen({navigation}) {
    const newReleases = games.slice(0,5);

    const topGames = [...games]
        .sort((a,b) => b.score - a.score)
        .slice(0,3);

    function openGame(game) {
        navigation.navigate(
            "GameDetail",
            {game}
        );
    }

    return (
        <View style={styles.page}>
            <Header navigation={navigation}/>
            <ScrollView
                style={styles.homeScroll}
                contentContainerStyle={styles.homeScrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.homeHero}>
                    <Text style={styles.homeLogo}>
                        <Text style={styles.homeLogoAccent}>
                            G
                        </Text>
                        RATE
                    </Text>
                    <Text style={styles.homeHeadline}>
                        Discover, rate, and review the games that matter.
                    </Text>
                    <Text style={styles.homeDescription}>
                        Community scores you can trust.
                    </Text>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() =>
                            navigation.navigate("GameCatalogue")
                        }
                    >
                        <Text style={styles.primaryButtonText}>
                            Browse all games
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.homeContent}>
                    <View style={styles.homeSectionHeader}>
                        <Text style={styles.homeSectionTitle}>
                            New Releases
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("GameCatalogue")
                            }
                        >
                            <Text style={styles.homeViewAll}>
                                View all
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.releaseRow}
                    >
                        {newReleases.map(game => (
                            <TouchableOpacity
                                key={game.id}
                                style={styles.releaseCard}
                                activeOpacity={0.85}
                                onPress={() => openGame(game)}
                            >
                                <View style={styles.releaseCover}>
                                    <Text style={styles.releaseCoverLetter}>
                                        {game.title.charAt(0)}
                                    </Text>
                                </View>
                                <View style={styles.releaseNameScoreRow}>
                                    <View style={styles.releaseNameBlock}>
                                        <Text
                                            style={styles.releaseTitle}
                                            numberOfLines={1}
                                        >
                                            {game.title}
                                        </Text>
                                        <Text style={styles.releasePlatform}>
                                            {game.platform}
                                        </Text>
                                    </View>
                                    <GrateScore
                                        score={game.score}
                                        size="small"
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View style={styles.homeDivider}/>
                    <View style={styles.homeSectionHeader}>
                        <Text style={styles.homeSectionTitle}>
                            Top Rated Games
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("GameCatalogue")
                            }
                        >
                            <Text style={styles.homeViewAll}>
                                View all
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {topGames.map((game,index) => (
                        <TouchableOpacity
                            key={game.id}
                            style={styles.topRatedRow}
                            activeOpacity={0.85}
                            onPress={() => openGame(game)}
                        >
                            <Text style={styles.topRatedNumber}>
                                {index + 1}
                            </Text>
                            <View style={styles.topRatedCover}>
                                <Text style={styles.topRatedCoverLetter}>
                                    {game.title.charAt(0)}
                                </Text>
                            </View>
                            <View style={styles.topRatedInformation}>
                                <Text style={styles.topRatedTitle}>
                                    {game.title}
                                </Text>
                                <Text style={styles.topRatedPlatform}>
                                    {game.platform}
                                </Text>
                            </View>
                            <GrateScore
                                score={game.score}
                                size="small"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}