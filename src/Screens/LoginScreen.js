import React, {
    useState
} from "react";


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
    loginUser
} from "../utils/auth";



export default function LoginScreen({navigation}) {


    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");



    function showMessage(title,message){

        if(Platform.OS === "web"){

            window.alert(
                title + "\n\n" + message
            );

        }
        else{

            Alert.alert(
                title,
                message
            );

        }

    }



    async function handleLogin(){


        if(!email || !password){

            showMessage(
                "Validation Error",
                "Email and password are required"
            );

            return;

        }



        const user =
            await loginUser(
                email,
                password
            );



        if(!user){

            showMessage(
                "Login Failed",
                "Invalid email or password"
            );

            return;

        }



        showMessage(
            "Success",
            "Login successful"
        );



        if(user.role === "moderator"){

            navigation.navigate(
                "ModeratorDashboard"
            );

        }
        else{

            navigation.navigate(
                "Home"
            );

        }

    }



    return (

        <View style={styles.container}>


            <Text style={styles.title}>
                GRATE Login
            </Text>



            <TextInput

                style={styles.input}

                placeholder="Email"

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

                onPress={() => navigation.navigate("Register")}

            >

            <Text style={styles.registerText}>
                Create new account
            </Text>

            </TouchableOpacity>


        </View>

    );

}



const styles = StyleSheet.create({

    container:{

        flex:1,

        justifyContent:"center",

        padding:20

    },


    title:{

        fontSize:26,

        fontWeight:"bold",

        textAlign:"center",

        marginBottom:30

    },


    input:{

        borderWidth:1,

        borderColor:"#ccc",

        padding:12,

        borderRadius:8,

        marginBottom:15

    },


    button:{

        backgroundColor:"#000",

        padding:15,

        borderRadius:8

    },


    buttonText:{

        color:"#fff",

        textAlign:"center",

        fontWeight:"bold"

    },

    registerButton:{

    marginTop:20

    },


    registerText:{

    textAlign:"center",

    color:"#333",

    fontWeight:"bold"

    }

});