import React from 'react';
import Modal from 'react-native-modal';
import { Text } from '../elements/Text';
import { Image, View } from 'react-native';
import { Button } from './Button';
import { IUser } from '../reducers/types';
import Icon from 'react-native-vector-icons/Ionicons';
import { MAIN_COLOR } from '../styles/colors';
import { PopupStyles } from '../styles/elements/Popup';
import { UserCardStyles } from '../styles/components/UserCard';

interface IModalAction {
  text: string;
  action: () => void;
}

interface IModalProps {
  isVisible: boolean;
  message: string;
  onSubmit: IModalAction;
  onCancel: IModalAction;
  user?: IUser;
}

export const Popup = ({ isVisible, message, onSubmit, onCancel, user }: IModalProps) => {
  if (!user) {
    return null;
  }
  return (
    <Modal isVisible={isVisible}>
      <View style={PopupStyles.headerContainer}>
        <Icon name={'ios-flame'} size={125} color={MAIN_COLOR} />
      </View>
      <View style={PopupStyles.container}>
        <Text style={PopupStyles.messageText}>{message}</Text>
        <View style={PopupStyles.userContainer}>
          <Image style={UserCardStyles.avatar} source={{ uri: user.avatar }} />
          <View style={PopupStyles.infoContainer}>
            <Text style={[UserCardStyles.nameText, { color: '#000' }]}>{`${user.name}, ${user.age}`}</Text>
          </View>
        </View>
        <View style={PopupStyles.buttonsContainer}>
          <Button onPress={onSubmit.action} text={onSubmit.text} />
          <Button onPress={onCancel.action} text={onCancel.text} />
        </View>
      </View>
    </Modal>
  );
};
