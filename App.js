import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text,SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const  [userNumber,setUserNumber] = useState();
  const [gameIsOver,setGameIsOver] = useState(true);
  const[fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/open-sans-regular.ttf'),
    'open-sans-bold': require('./assets/fonts/open-sans-bold.ttf'),
  });

  if(!fontLoaded){
    return <AppLoading/>
  }
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }
  let screen =<StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber) {
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>);
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen/>
  }

  
  return (
    <LinearGradient colors={[Colors.Primary700, Colors.accent600]} style= {styles.rootScreen}>
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
