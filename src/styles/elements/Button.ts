import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../colors';

export const ButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    width: 50,
    backgroundColor: MAIN_COLOR,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
