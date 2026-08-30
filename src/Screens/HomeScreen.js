import React from "react";

import {
View,
Text,
TouchableOpacity,
StyleSheet
} from "react-native";


export default function HomeScreen({navigation}){


return(

<View style={styles.container}>


<Text style={styles.title}>
GRATE
</Text>


<Text style={styles.subtitle}>
Game Rating Platform
</Text>



<TouchableOpacity

style={styles.button}

onPress={() =>
navigation.navigate("Register")
}

>

<Text style={styles.buttonText}>
Create Account
</Text>

</TouchableOpacity>



</View>

);

}



const styles = StyleSheet.create({

container:{

flex:1,

justifyContent:"center",

alignItems:"center",

padding:20

},


title:{

fontSize:32,

fontWeight:"bold"

},


subtitle:{

fontSize:16,

marginBottom:40

},


button:{

backgroundColor:"#222",

padding:15,

borderRadius:10,

width:"80%"

},


buttonText:{

color:"white",

textAlign:"center",

fontWeight:"bold"

}

});