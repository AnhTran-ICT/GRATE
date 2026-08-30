import React from "react";


import {

TouchableOpacity,

Text,

StyleSheet

} from "react-native";


import {
    logoutUser
} from "../utils/auth";



export default function LogoutButton({navigation}) {


    async function handleLogout(){

        await logoutUser();

        navigation.replace("Login");

    }



    return (

        <TouchableOpacity

            style={styles.button}

            onPress={handleLogout}

        >

            <Text style={styles.text}>
                Logout
            </Text>


        </TouchableOpacity>

    );

}



const styles = StyleSheet.create({

button:{

backgroundColor:"#000",

padding:12,

borderRadius:8

},


text:{

color:"#fff",

fontWeight:"bold"

}

});