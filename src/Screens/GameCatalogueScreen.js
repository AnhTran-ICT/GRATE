import React from "react";
import {View,Text,FlatList} from "react-native";
import games from "../data/games";
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import styles from "../styles/style.js";

export default function CatalogueScreen({navigation}){
    return (
        <View style={styles.container}>
            <Header/>
                <Text style={styles.screenTitle}>
                    Browse Games
                </Text>

                <FlatList
                    data={games}
                    keyExtractor={
                        item=>item.id
                    }
                    renderItem={({item})=>(
                        <GameCard
                            game={item}
                            navigation={navigation}
                        />
                    )}
            />
        </View>
    );
}