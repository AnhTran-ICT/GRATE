import React from "react";
import {View,Image,Text} from "react-native";
import styles from "../styles/style";

const goodGrate = require("../assets/goodgrate.png");
const medGrate = require("../assets/medgrate.png");
const badGrate = require("../assets/badgrate.png");

export default function GrateScore({score,size="normal",showLabel=false}) {
    const numericScore = Math.max(
        0,
        Math.min(
            100,
            Math.round(Number(score) || 0)
        )
    );

    let imageSource = badGrate;
    let scoreColor = "#c62828";
    let ratingText = "Not Grate";

    if(numericScore >= 75) {
        imageSource = goodGrate;
        scoreColor = "#15803d";
        ratingText = "Very Grate";
    }
    else if(numericScore >= 50) {
        imageSource = medGrate;
        scoreColor = "#ea8a00";
        ratingText = "AveGrate";
    }

    const large = size === "large";
    const small = size === "small";

    return (
        <View style={[
            styles.grateScoreContainer,
            large && styles.grateScoreContainerLarge,
            small && styles.grateScoreContainerSmall
        ]}>
            <Image
                source={imageSource}
                style={[
                    styles.grateScoreImage,
                    large && styles.grateScoreImageLarge,
                    small && styles.grateScoreImageSmall
                ]}
                resizeMode="contain"
            />
            <Text style={[
                styles.grateScoreValue,
                {color:scoreColor},
                large && styles.grateScoreValueLarge,
                small && styles.grateScoreValueSmall
            ]}>
                {numericScore}
            </Text>
            {showLabel && (
                <Text style={styles.grateScoreLabel}>
                    {ratingText}
                </Text>
            )}
        </View>
    );
}