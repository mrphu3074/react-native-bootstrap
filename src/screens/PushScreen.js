import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default () => (
  <View style={styles.container}>
    <Text>PushScreen</Text>
    <Button title="Back" onPress={() => Actions.pop()} />
  </View>
);
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCEDC8',
  }
};