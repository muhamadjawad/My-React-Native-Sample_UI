import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {height, width} from '../../../Style/dimensions';
import {DARK_BLUE_COLORS} from '../colors';

const DeviceHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        paddingLeft: width(5),
        alignItems: 'center',
        marginTop: height(2),
      }}>
      <Text style={[styles.left]}>Devices</Text>
      <Text style={[styles.right]}>(23)</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  left: {
    fontSize: width(6),
    color: DARK_BLUE_COLORS.COLOR_WHITE,
    fontWeight: 'bold',
  },
  right: {
    marginLeft: width(3),
    fontSize: width(4),
    color: DARK_BLUE_COLORS.COLOR_WHITE,
  },
});
export default DeviceHeader;
