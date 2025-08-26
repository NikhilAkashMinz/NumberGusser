import { Text, View, StyleSheet, SafeAreaView,Alert } from "react-native";
import { useState,useEffect } from "react";
import {Ionicons} from "@expo/vector-icons";
import Title from "../components/ui/Title";

import Colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min,max,exclude){
  const rndNum = Math.floor(Math.random() * (max-min)) + min;

  if(rndNum == exclude){
    return generateRandomBetween(min,max,exclude)
  }
  else{
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber,onGameOver}) {

  const initialGuess  = generateRandomBetween(1,100, userNumber);
  const [currentGuess,setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if(currentGuess == userNumber){
      onGameOver();
    }
  }, [currentGuess,userNumber,onGameOver]);
  
  function nextGuessHandler(direction){

    if((direction == 'lower' && currentGuess < userNumber) || direction == 'greater' && currentGuess > userNumber)
    {
      Alert.alert("Dont lie!", 'You know I guessed the write number...', [{text:'Sorry', style:'cancel'}]);
      return;
    }

    if(direction == 'lower')
    {
      maxBoundary = currentGuess;
    }
    else{
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary,maxBoundary);
    const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
    setCurrentGuess(newRndNumber);
  }

  return (
      <View style={styles.screen}>
        <Title>Opponents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="remove" size={24} color='white' />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="add" size={24} color='white' />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View>
          <Text>Log Rounds</Text>
        </View>
      </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText : {
    marginBottom:12,
  },
  buttonsContainer:{
    flexDirection:'row',
  },
  buttonContainer:{
    flex:1,
  }
  
});
