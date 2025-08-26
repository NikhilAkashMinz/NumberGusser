import { Text,View,Image,StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen(){
    return(
        <View styrle={styles.rootCintainer}>
            <Title>Game Over!</Title> 
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/winner.jpg')} />
            </View>  
            <Text>Your Phone needed X rounds to guess the number Y</Text>
            <Text>Number of rounds</Text>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootCintainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.Primary800,
        overflow:'hidden',
        margin:36,
    },
    image:{
        width:'100%',
        height:'100%',      
    },
});