import React from 'react';
import { View } from 'react-native';
import { AnimatedButtonTextInput } from 'react-native-animated-button-textinput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchInputStyles } from '../styles/components/SearchInput';

interface ISearchInputProps {
  onValueChanged: (value: string) => void;
}

export const SearchInput = ({ onValueChanged }: ISearchInputProps) => {
  return (
    <View style={SearchInputStyles.container}>
      <AnimatedButtonTextInput
        rightButtonContent={() => <Icon name={'remove'} size={25} />}
        rightButtonProps={{ style: SearchInputStyles.rightButton }}
        collapsedWidth={40}
        componentProps={{ style: SearchInputStyles.input }}
        collapsedContent={() => <Icon name={'search'} size={25} />}
        textInputProps={{
          onChangeText: onValueChanged,
          placeholder: 'Name',
        }}
      />
    </View>
  );
};
