import {Navigation} from 'react-native-navigation';
import HomeScreen from './HomeScreen';
import PushScreen from './PushScreen';
export const registerScreens = () => {
  Navigation.registerComponent('App.Screen.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('App.Screen.PushScreen', () => PushScreen);
};
