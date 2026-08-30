import AsyncStorage from "@react-native-async-storage/async-storage";


const USERS_KEY = "grate_users";


export async function saveUsers(users) {

    try {

        await AsyncStorage.setItem(
            USERS_KEY,
            JSON.stringify(users)
        );

    } catch (error) {

        console.log("Save users error:", error);

    }

}



export async function getUsers() {

    try {

        const data = await AsyncStorage.getItem(
            USERS_KEY
        );


        return data ? JSON.parse(data) : [];


    } catch (error) {

        console.log("Get users error:", error);

        return [];

    }

}