import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import GameCatalogueScreen from "../screens/GameCatalogueScreen";
import GameDetailScreen from "../screens/GameDetailScreen";
import ModeratorDashboard from "../screens/ModeratorDashboard";

const Stack =
    createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />

            <Stack.Screen
                name="Register"
                component={RegisterScreen}
            />

            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />

            <Stack.Screen
                name="GameCatalogue"
                component={GameCatalogueScreen}
            />

            <Stack.Screen
                name="GameDetail"
                component={GameDetailScreen}
            />

            <Stack.Screen
                name="ModeratorDashboard"
                component={ModeratorDashboard}
            />
        </Stack.Navigator>
    );
}