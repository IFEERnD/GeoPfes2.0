import React from 'react';
import {Image, Platform, StyleSheet, TextInput, View} from 'react-native';
import img from '../constant/img';
import colors from '../constant/colors';
import dimension from '../constant/dimension';

const SearchUI = ({placeHolder, width, text, setText}) => {
  return (
    <View style={[styles.container, {width: width || '100%'}]}>
      <Image source={img.search} style={styles.searchImg} />
      <TextInput
        placeholder={placeHolder || ''}
        placeholderTextColor={colors.INACTIVE_TEXT}
        value={text}
        onChangeText={e => {
          setText(e);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: colors.INACTIVE_TEXT,
    paddingVertical: Platform.OS == 'ios' ? 10 : 0,
    borderRadius: 16,
    paddingLeft: 10,
  },

  searchImg: {
    width: 20,
    height: 20,
    tintColor: colors.INACTIVE_TEXT,
    marginRight: dimension.perWidth('1%'),
  },

  inputText: {
    flex: 1,
    borderWidth: 1,
  },
});

export default SearchUI;
