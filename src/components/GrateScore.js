import React from "react";
import {View,Text} from "react-native";
import styles from "../styles/style.js";

export default function GrateScore({score}){
let background="#ffcccc";

if(score>=75){
    background="#b7f7b7";
}
else if(score>=50){
    background="#ffd580";
}

return (
    <View
        style={[
            styles.scoreContainer,
            {
                backgroundColor:background
            }
        ]}>
        <Text style={styles.scoreText}>
        🧀 {score}
        </Text>
    </View>
    );
}