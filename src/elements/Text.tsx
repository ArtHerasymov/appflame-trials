import React from 'react';
import { Text as ReactText, TextProps } from 'react-native';
import { FONT_COLOR } from '../styles/colors';

export interface ITypographyProps extends TextProps {
  children: string;
  color?: string;
}

export const Text = (props: ITypographyProps) => {
  const color = props.color || FONT_COLOR;
  return (
    <ReactText {...props} style={[{ color }, props.style]}>
      {props.children}
    </ReactText>
  );
};
