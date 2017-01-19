import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { LoginButton, AppEventsLogger } from 'react-native-fbsdk';
import _ from 'lodash';

import Firestack from 'react-native-firestack'

const firestack = new Firestack({
  persistence: true
});

const todoRef = firestack.database.ref('todos');
todoRef.keepSynced(true);

export default class HomeScreen extends React.Component {
  state = {
    items: []
  };
  componentDidMount() {
    todoRef.on('value', snapshot => {
      this.setState({
        items: _.toArray(snapshot.val())
      });
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button title="Push Screen" onPress={() => {
          Actions.pushScreen();
        }}/>
        <LoginButton />

        <ScrollView>
          {this.state.items.map((item, key) => (
            <View key={key}>
              <Text style={{ color: '#666' }}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#BBDEFB',
    paddingTop: 64
  }
};