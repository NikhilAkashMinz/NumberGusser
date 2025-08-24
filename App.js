import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';

export default function App() {
  const  [userNumber,setUserNumber] = useState();
   function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
   }

   let screen =<StartGameScreen onPickNumber={pickedNumberHandler}/>;

   if(userNumber) {
    screen = <GameScreen/>
   }
  
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style = {styles.rootScreen}>
      <ImageBackground source={require('./assets/images/sexy.jpg')}
      resizeMode="cover"
      style={styles.rootScreen} 
      imageStyle={styles.backgoundImage}>
        <SafeAreaView  style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  },
  backgoundImage:{
    opacity:0.15,
  }
  
});
