import React from "react";
import {TouchableOpacity,Text} from "react-native";
import styles from "../styles/style";

export default function FilterChip({
    label,
    selected,
    onPress
}) {
    return (
        <TouchableOpacity
            style={[
                styles.filterChip,
                selected &&
                styles.filterChipActive
            ]}
            onPress={onPress}
        >

            <Text
                style={[
                    styles.filterChipText,
                    selected &&
                    styles.filterChipTextActive
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}