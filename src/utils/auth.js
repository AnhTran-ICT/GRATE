import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    getUsers
} from "./storage";


const CURRENT_USER_KEY = "grate_current_user";



export async function loginUser(email, password) {

    const users = await getUsers();


    const user = users.find(
        item =>
            item.email.toLowerCase() === email.toLowerCase()
            &&
            item.password === password
    );


    if (!user) {

        return null;

    }


    await AsyncStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(user)
    );


    return user;

}



export async function logoutUser() {

    await AsyncStorage.removeItem(
        CURRENT_USER_KEY
    );

}



export async function getCurrentUser() {

    const data =
        await AsyncStorage.getItem(
            CURRENT_USER_KEY
        );


    return data
        ? JSON.parse(data)
        : null;

}