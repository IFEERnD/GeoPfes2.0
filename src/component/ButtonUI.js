import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import img from '../constant/img';
import colors from '../constant/colors';
import {shadowIOS} from '../constant/iosProps';

export const AddBtn = ({}) => {
  return (
    <TouchableOpacity style={styles.containerPlusBtn}>
      <Image source={img.plus} style={styles.plusImg} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerPlusBtn: {
    padding: 12,
    backgroundColor: colors.DEFAULT_GREEN,
    borderRadius: 50,
  },

  plusImg: {
    width: 16,
    height: 16,
    tintColor: colors.WHITE,
  },
});
