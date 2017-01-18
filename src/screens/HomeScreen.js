import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default () => (
  <View style={styles.container}>
    <Text>HomeScreen</Text>
    <Icon name={'ios-add'} size={40} />
    <Button title="Go PushScreen" onPress={() => {
      Actions.pushScreen()
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