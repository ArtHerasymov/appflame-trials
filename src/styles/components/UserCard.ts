import { StyleSheet } from 'react-native';
import { SECONDARY_COLOR } from '../colors';

export const UserCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 140,
    width: 140,
    margin: 10,
    borderRadius: 70,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
