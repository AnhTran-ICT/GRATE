import React from "react";
import {View,TextInput,TouchableOpacity,Text} from "react-native";
import styles from "../styles/style";

export default function SearchBar({
    value,
    onChangeText,
    onClear
}) {
    return (
        <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>
                ⌕
            </Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Search games..."
                placeholderTextColor="#8a8a8a"
                value={value}
                onChangeText={onChangeText}
            />

            {value.length > 0 && (
                <TouchableOpacity
                    onPress={onClear}
                >
                    <Text style={styles.searchClear}>
                        ×
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}