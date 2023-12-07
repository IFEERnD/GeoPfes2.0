import React from 'react';
import {useWindowDimensions, View, Image} from 'react-native';

const CustomBottomTab = () => {
  const {width} = useWindowDimensions();
  const MARGIN = 20;
  const TAB_WIDTH = width - MARGIN * 2;

  return <View></View>;
};

export default CustomBottomTab;
