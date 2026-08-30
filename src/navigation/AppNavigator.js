import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ModeratorDashboard from "../screens/ModeratorDashboard";
import GameCatalogueScreen from "../screens/GameCatalogueScreen";
import GameDetailScreen from "../screens/GameDetailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
        >

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: "Login"
                }}
            />

            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    title: "Register"
                }}
            />

            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Home",
                    headerBackVisible: false
                }}
            />

            <Stack.Screen
                name="GameCatalogue"
                component={GameCatalogueScreen}
                options={{
                    title: "Browse Games"
                }}
            />

            <Stack.Screen
                name="GameDetail"
                component={GameDetailScreen}
                options={{
                    title: "Game Details"
                }}
            />

            <Stack.Screen
                name="ModeratorDashboard"
                component={ModeratorDashboard}
                options={{
                    title: "Moderator Dashboard",
                    headerBackVisible: false
                }}
            />
        </Stack.Navigator>
    );
}