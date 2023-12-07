import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../constant/colors';
import dimension from '../constant/dimension';
import {AddBtn} from './ButtonUI';

const fontDefault = dimension.perWidth('4%');

export const EmptyList = ({emptyText, fontSize}) => {
  return (
    <View style={styles.containerEmptyList}>
      <Text
        style={[
          styles.textEmptyList,
          {fontSize: dimension.perWidth(fontSize) || fontDefault},
        ]}>
        {emptyText || 'Không có dữ liệu!'}
      </Text>
      <View style={styles.textAddContainer}>
        <Text
          style={[
            styles.textEmptyList,
            {fontSize: dimension.perWidth(fontSize) || fontDefault},
          ]}>
          {'Click vào nút '}
        </Text>
        <AddBtn />
        <Text
          style={[
            styles.textEmptyList,
            {fontSize: dimension.perWidth(fontSize) || fontDefault},
          ]}>
          {' để tạo mới'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerEmptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textEmptyList: {
    color: colors.INACTIVE_TEXT,
  },

  textAddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
});
