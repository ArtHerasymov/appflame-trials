import { Platform, StyleSheet } from 'react-native';

export const SearchInputStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  rightButton: {
    height: 32,
    paddingHorizontal: 10,
    borderRadius: 32,
    justifyContent: 'center',
    top: Platform.OS === 'android' ? 7 : 0,
    alignItems: 'center',
    marginRight: 4,
  },
  input: {
    maxWidth: 285,
  },
});
