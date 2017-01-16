import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default ({navigator}) => (
  <View style={styles.container}>
    <Text>HomeScreen</Text>
    <Button title="Go PushScreen" onPress={() => {
      navigator.push({
        screen: 'App.Screen.PushScreen',
        title: 'Push screen'
      })
    }} />
  </View>
);
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBDEFB',
  }
};