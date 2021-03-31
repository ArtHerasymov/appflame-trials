import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const PopupStyles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
    top: height / 6,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#fff',
    height: 400,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 5,
    paddingTop: 40,
  },
  messageText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  userContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
