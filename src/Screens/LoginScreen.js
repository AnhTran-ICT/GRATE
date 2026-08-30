import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Alert,Platform} from "react-native";
import { loginUser } from "../utils/auth";
import styles from "../styles/style";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function showMessage(title, message) {
        if (Platform.OS === "web") {
            window.alert(
                title + "\n\n" + message
            );
        } else {
            Alert.alert(
                title,
                message
            );
        }
    }

    async function handleLogin() {
        if (!email || !password) {
            showMessage(
                "Validation Error",
                "Email and password are required"
            );
            return;
        }

        const user = await loginUser(
            email,
            password
        );

        if (!user) {
            showMessage(
                "Login Failed",
                "Invalid email or password"
            );
            return;
        }

        if (user.role === "moderator") {
            navigation.replace(
                "ModeratorDashboard"
            );
        } else {
            navigation.replace(
                "Home"
            );
        }
    }

    return (
        <View style={styles.authContainer}>
            <Text style={styles.authTitle}>
                GRATE Login
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.registerButton}
                onPress={() =>
                    navigation.navigate("Register")
                }
            >
                <Text style={styles.registerText}>
                    Create new account
                </Text>
            </TouchableOpacity>
        </View>
    );
}