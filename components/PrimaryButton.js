import { View,Text,Pressable } from "react-native";
import { StyleSheet } from "react-native";

function PrimaryButton({children, onPress})
{
    
    return(
        <View style ={styles.buttonOuterContainer}>
            <Pressable style= {({pressed}) => pressed ? [styles.buttonInnerContainer,styles.pressed]
            : styles.buttonInnerContainer} 
            onPress={onPress} 
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