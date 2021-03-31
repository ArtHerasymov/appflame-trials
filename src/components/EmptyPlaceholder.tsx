import React from 'react';
import { Image, ImageStyle, StyleProp, View } from 'react-native';
import { Text } from '../elements/Text';
import { EmptyPlaceholderStyles } from '../styles/components/EmptyPlaceholder';

interface IEmptyPlaceholderProps {
  style?: StyleProp<ImageStyle>;
}

export const EmptyPlaceholder = ({ style }: IEmptyPlaceholderProps) => {
  return (
    <>
      <Image resizeMode={'contain'} style={style} source={require('../../assets/images/empty.png')} />
      <View style={EmptyPlaceholderStyles.messageContainer}>
        <Text style={EmptyPlaceholderStyles.messageText}>NO RESULTS FOUND</Text>
      </View>
    </>
  );
};
