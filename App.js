import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const loadpic = {require('./IcePick_64x64.gif')}

const App = () => {
  return (
    <View style={styles.container}>
      <Image source loadpic />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// loading screen
// start && settings screen
// settings screen
// game screen
// // start position
// // end position
// // player
// // enemy
// // map
// // timer
// end game screen && high score