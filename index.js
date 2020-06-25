/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login  from './src/screens/login'
import Navigation  from './src/navigation/navigation'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
