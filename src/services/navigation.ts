import { Navigation } from 'react-native-navigation';
import Home from '../screens/Home';
import App from '../../App';

export const HOME_SCREEN = 'Home';
export const APP_ROOT = 'App';

Navigation.registerComponent(APP_ROOT, () => App);
Navigation.registerComponent(HOME_SCREEN, () => Home);
