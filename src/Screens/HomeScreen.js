import React from "react";


import {

View,

Text,

StyleSheet

} from "react-native";


import LogoutButton
from "../components/LogoutButton";



export default function HomeScreen({navigation}){


return (

<View style={styles.container}>


<Text style={styles.title}>
    GRATE
</Text>


<Text>
    Welcome to the Game Rating Platform
</Text>


<LogoutButton
    navigation={navigation}
/>


</View>

);

}



const styles = StyleSheet.create({

container:{

flex:1,

justifyContent:"center",

alignItems:"center",

gap:20

},


title:{

fontSize:32,

fontWeight:"bold"

}

});