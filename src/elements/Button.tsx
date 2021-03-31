import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Text } from './Text';
import { ButtonStyles } from '../styles/elements/Button';

interface IButtonProps {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
}

export const Button = ({ onPress, text, style }: IButtonProps) => {
  return (
    <TouchableOpacity style={[ButtonStyles.container, style]} onPress={onPress}>
      <Text style={ButtonStyles.text}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};
