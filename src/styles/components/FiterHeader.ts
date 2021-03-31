import { StyleSheet } from 'react-native';

export const FilterHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4E3976',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ageSortButton: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
