import React, {useState} from 'react';
import { View } from 'react-native';
import { AnimatedButtonTextInput } from 'react-native-animated-button-textinput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchInputStyles } from '../styles/components/SearchInput';

interface ISearchInputProps {
  value?: string;
  onValueChanged: (value: string) => void;
  onClose: () => void;
}

export const SearchInput = ({ value, onValueChanged, onClose }: ISearchInputProps) => {
  return (
    <View style={SearchInputStyles.container}>
      <AnimatedButtonTextInput
        rightButtonContent={() => <Icon name={'remove'} size={25} />}
        rightButtonProps={{ style: SearchInputStyles.rightButton }}
        collapsedWidth={40}
        componentProps={{ style: SearchInputStyles.input }}
        collapsedContent={() => <Icon name={'search'} size={25} />}
        onExpandedPress={onClose}
        textInputProps={{
          value,
          onChangeText: onValueChanged,
          placeholder: 'Name',
        }}
      />
    </View>
  );
};
