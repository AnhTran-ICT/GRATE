import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Alert,Platform} from "react-native";
import {getUsers,saveUsers} from "../utils/storage";
import styles from "../styles/style";

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function showMessage(title, message) {
        if (Platform.OS === "web") {
            window.alert(
                `${title}\n\n${message}`
            );
        } else {
            Alert.alert(
                title,
                message
            );
        }
    }

    async function handleRegister() {
        if (
            !username ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            showMessage(
                "Validation Error",
                "All fields are required"
            );
            return;
        }

        if (!email.includes("@")) {
            showMessage(
                "Validation Error",
                "Please enter a valid email address"
            );
            return;
        }

        if (password.length < 6) {
            showMessage(
                "Validation Error",
                "Password must contain at least 6 characters"
            );
            return;
        }

        if (password !== confirmPassword) {
            showMessage(
                "Validation Error",
                "Passwords do not match"
            );
            return;
        }

        const users = await getUsers();
        const existingUser = users.find(
            user =>
                user.email.toLowerCase() ===
                email.toLowerCase()
        );

        if (existingUser) {
            showMessage(
                "Registration Failed",
                "Email already exists"
            );
            return;
        }

        const newUser = {
            id: Date.now().toString(),
            username: username.trim(),
            email: email.trim().toLowerCase(),
            password: password,
            role: "user"
        };

        await saveUsers([
            ...users,
            newUser
        ]);

        showMessage(
            "Success",
            "Account created successfully. Please log in."
        );
        navigation.replace("Login");
    }

    return (
        <View style={styles.authContainer}>
            <Text style={styles.authTitle}>
                Create GRATE Account
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

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

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            
            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>
                    Register
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.registerButton}
                onPress={() =>
                    navigation.replace("Login")
                }
            >
                <Text style={styles.registerText}>
                    Already have an account? Login
                </Text>
            </TouchableOpacity>
        </View>
    );
}