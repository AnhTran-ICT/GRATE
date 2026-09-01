import React,{useMemo,useState} from "react";
import {
    View,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity
} from "react-native";
import games,{platforms,genres} from "../data/games";
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import FilterChip from "../components/FilterChip";
import styles from "../styles/style";

export default function GameCatalogueScreen({navigation}) {
    const [searchText,setSearchText] = useState("");
    const [selectedPlatform,setSelectedPlatform] = useState("All");
    const [selectedGenre,setSelectedGenre] = useState("All");

    const filteredGames = useMemo(() => {
        const search = searchText.trim().toLowerCase();

        return games.filter(game => {
            const matchesSearch =
                search === "" ||
                game.title.toLowerCase().includes(search);

            const matchesPlatform =
                selectedPlatform === "All" ||
                game.platform === selectedPlatform ||
                game.platform === "Multiple";

            const matchesGenre =
                selectedGenre === "All" ||
                game.genre === selectedGenre;

            return (
                matchesSearch &&
                matchesPlatform &&
                matchesGenre
            );
        });
    },[
        searchText,
        selectedPlatform,
        selectedGenre
    ]);

    function clearFilters() {
        setSearchText("");
        setSelectedPlatform("All");
        setSelectedGenre("All");
    }

    const filtersActive =
        searchText !== "" ||
        selectedPlatform !== "All" ||
        selectedGenre !== "All";

    return (
        <View style={styles.page}>
            <Header
                navigation={navigation}
                showBack
            />
            <View style={styles.catalogueContent}>
                <Text style={styles.catalogueTitle}>
                    Game Catalogue
                </Text>
                <Text style={styles.catalogueSubtitle}>
                    Search and discover games rated by the GRATE community.
                </Text>
                <View style={styles.catalogueSearchSection}>
                    <View style={styles.catalogueFilterBlock}>
                        <Text style={styles.filterLabel}>
                            Search
                        </Text>
                        <SearchBar
                            value={searchText}
                            onChangeText={setSearchText}
                            onClear={() => setSearchText("")}
                        />
                    </View>
                    <View style={styles.catalogueFilterBlock}>
                        <Text style={styles.filterLabel}>
                            Platform
                        </Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.filterScroll}
                            contentContainerStyle={styles.filterRow}
                        >
                            {platforms.map(platform => (
                                <FilterChip
                                    key={platform}
                                    label={
                                        platform === "Nintendo Switch"
                                            ? "Switch"
                                            : platform
                                    }
                                    selected={
                                        selectedPlatform === platform
                                    }
                                    onPress={() =>
                                        setSelectedPlatform(platform)
                                    }
                                />
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.catalogueFilterBlock}>
                        <Text style={styles.filterLabel}>
                            Genre
                        </Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.filterScroll}
                            contentContainerStyle={styles.filterRow}
                        >
                            {genres.map(genre => (
                                <FilterChip
                                    key={genre}
                                    label={genre}
                                    selected={
                                        selectedGenre === genre
                                    }
                                    onPress={() =>
                                        setSelectedGenre(genre)
                                    }
                                />
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.resultHeader}>
                    <Text style={styles.resultCount}>
                        {filteredGames.length}
                        {" "}
                        {filteredGames.length === 1
                            ? "game"
                            : "games"}
                    </Text>
                    {filtersActive && (
                        <TouchableOpacity onPress={clearFilters}>
                            <Text style={styles.clearFilters}>
                                Clear filters
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                <FlatList
                    data={filteredGames}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <GameCard
                            game={item}
                            navigation={navigation}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.gameList}
                    ListEmptyComponent={
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyStateTitle}>
                                No games found
                            </Text>
                            <Text style={styles.emptyStateText}>
                                Try changing your search or filters.
                            </Text>
                        </View>
                    }
                />
            </View>
        </View>
    );
}