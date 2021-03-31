import React from 'react';
import { SafeAreaView, StatusBar, StatusBarStyle } from 'react-native';

interface IScreenViewProps {
  children?: JSX.Element | JSX.Element[];
  barStyle?: StatusBarStyle;
  statusBarColor?: string;
  navigationMenuColor?: string;
}

export const ScreenView = ({ children, barStyle, navigationMenuColor, statusBarColor }: IScreenViewProps) => {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: statusBarColor }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: navigationMenuColor }}>
        <StatusBar barStyle={barStyle || 'dark-content'} backgroundColor={statusBarColor} />
        {children}
      </SafeAreaView>
    </>
  );
};
