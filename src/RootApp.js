import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomeScreen from './screens/HomeScreen';
import PushScreen from './screens/PushScreen';

class RootApp extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="homeScreen" title="HomeScreen" component={HomeScreen} />
          <Scene key="pushScreen" title="PushScreen" component={PushScreen} />
        </Scene>
      </Router>
    );
  }
}

export default RootApp;