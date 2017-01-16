import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default ({navigator}) => (
  <View style={styles.container}>
    <Text>PushScreen</Text>
    <Button title="Back" onPress={() => navigator.pop()} />
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