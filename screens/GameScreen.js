import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
      <View style={styles.screen}>
        <Title>Opponents Guess</Title>
        <View>
          <Text>Higher or Lower?</Text>
        </View>
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
  
});
