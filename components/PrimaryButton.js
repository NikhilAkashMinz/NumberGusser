import { View,Text,Pressable } from "react-native";
import { StyleSheet } from "react-native";

function PrimaryButton({children})
{
    function PreesMe()
    {
        console.log('Pressed');
    }
    return(
        <View style ={styles.buttonOuterContainer}>
            <Pressable style= {({pressed}) => pressed ? [styles.buttonInnerContainer,styles.pressed]
            : styles.buttonInnerContainer} 
            onPress={PreesMe} 
            android_ripple={{color: '#rgba(255,255,255,0.2)'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
    
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin:4,
        overflow:'hidden',
    },
    buttonInnerContainer: {
        backgroundColor:'#830544ff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    },
    pressed:{
        opacity:0.75,
    },
})