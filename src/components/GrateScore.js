import React from "react";
import {View,Image,Text} from "react-native";
import styles from "../styles/style";

const goodGrate =
    require("../assets/goodgrate.png");

const medGrate =
    require("../assets/medgrate.png");

const badGrate =
    require("../assets/badgrate.png");

export default function GrateScore({ score }) {
    let imageSource = badGrate;
    if (score >= 75) {
        imageSource = goodGrate;
    }
    else if (score >= 50) {
        imageSource = medGrate;
    }
    return (
        <View style={styles.grateScoreContainer}>
            <Image
                source={imageSource}
                style={styles.grateScoreImage}
                resizeMode="contain"
            />

            <View style={styles.grateScoreNumber}>
                <Text style={styles.grateScoreNumberText}>
                    {score}
                </Text>
            </View>
        </View>
    );
}