import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
// Register all app's screens
registerScreens();
// Start app entry
Navigation.startSingleScreenApp({
  screen: {
    screen: 'App.Screen.HomeScreen',
    title: 'HomeScreen',
  },
  drawer: {}
});
