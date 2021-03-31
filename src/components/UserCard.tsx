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

export const UserCard = ({ user, onDeletePressed }: IUserCardProps) => {
  return (
    <View style={UserCardStyles.container}>
      <TouchableOpacity onPress={() => onDeletePressed(user)} style={UserCardStyles.deleteButton}>
        <Icon name={'close'} size={25} color={FONT_COLOR} />
      </TouchableOpacity>
      <Image style={UserCardStyles.avatar} source={{ uri: user.avatar }} />
      <View style={UserCardStyles.infoContainer}>
        <Text style={UserCardStyles.nameText}>{`${user.name}, ${user.age}`}</Text>
      </View>
    </View>
  );
};
