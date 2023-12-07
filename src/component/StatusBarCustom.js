import React from 'react';
import {StatusBar} from 'react-native';
import colors from '../constant/colors';

const StatusBarCustom = ({bgColor, barStyle}) => {
  return (
    <StatusBar
      backgroundColor={bgColor || colors.DEFAULT_BG}
      barStyle={barStyle || 'dark-content'}
    />
  );
};

export default StatusBarCustom;
