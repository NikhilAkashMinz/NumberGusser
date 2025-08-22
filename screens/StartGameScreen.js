import { TextInput,StyleSheet,View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen() {
    return <View style={styles.inputContainer}>
        <TextInput/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confrim</PrimaryButton>
    </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop:100,
        padding:16,
        backgroundColor:'#72063c',
        marginHorizontal:24,
        borderRadius: 8,
        elevation:16,
        shadowColor:'black',
        shadowOffset:  { width:0 , height:45},
        shadowRadius:6,
        shadowOpacity:0.25,

    },

})