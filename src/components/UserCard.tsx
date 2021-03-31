import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FONT_COLOR } from '../styles/colors';
import { Text } from '../elements/Text';
import { IUser } from '../reducers/types';
import { UserCardStyles } from '../styles/components/UserCard';

interface IUserCardProps {
  user: IUser;
  onDeletePressed: (user: IUser) => void;
}

const REMOVE_BUTTON_AREA = { top: 50, bottom: 50, left: 50, right: 50 };

export const UserCard = ({ user, onDeletePressed }: IUserCardProps) => {
  return (
    <View style={UserCardStyles.container}>
      <TouchableOpacity
        hitSlop={REMOVE_BUTTON_AREA}
        onPress={() => onDeletePressed(user)}
        style={UserCardStyles.deleteButton}
      >
        <Icon name={'close'} size={25} color={FONT_COLOR} />
      </TouchableOpacity>
      <Image style={UserCardStyles.avatar} source={{ uri: user.avatar }} />
      <View style={UserCardStyles.infoContainer}>
        <Text style={UserCardStyles.nameText}>{`${user.name}, ${user.age}`}</Text>
      </View>
    </View>
  );
};
