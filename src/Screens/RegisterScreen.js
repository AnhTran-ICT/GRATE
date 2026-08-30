import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Platform
} from "react-native";

import {
    getUsers,
    saveUsers
} from "../utils/storage";


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


        // Check empty fields
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



        // Validate email format
        if (!email.includes("@")) {

            showMessage(
                "Validation Error",
                "Please enter a valid email address"
            );

            return;

        }



        // Validate password length
        if (password.length < 6) {

            showMessage(
                "Validation Error",
                "Password must contain at least 6 characters"
            );

            return;

        }



        // Confirm password
        if (password !== confirmPassword) {

            showMessage(
                "Validation Error",
                "Passwords do not match"
            );

            return;

        }



        // Get existing users
        const users = await getUsers();



        // Check duplicate email
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



        // Create new user
        const newUser = {

            id: Date.now().toString(),

            username: username,

            email: email,

            password: password,

            role: "user"

        };



        // Save user
        await saveUsers([
            ...users,
            newUser
        ]);



        showMessage(
            "Success",
            "Account created successfully"
        );



        // Login will be added in US2
        navigation.navigate("Home");


    }



    return (

        <View style={styles.container}>


            <Text style={styles.title}>
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



        </View>

    );

}



const styles = StyleSheet.create({

    container: {

        flex: 1,

        justifyContent: "center",

        padding: 20

    },


    title: {

        fontSize: 26,

        fontWeight: "bold",

        textAlign: "center",

        marginBottom: 30

    },


    input: {

        borderWidth: 1,

        borderColor: "#cccccc",

        padding: 12,

        borderRadius: 8,

        marginBottom: 15

    },


    button: {

        backgroundColor: "#000000",

        padding: 15,

        borderRadius: 8,

        alignItems: "center"

    },


    buttonText: {

        color: "#ffffff",

        fontWeight: "bold",

        fontSize: 16

    }

});