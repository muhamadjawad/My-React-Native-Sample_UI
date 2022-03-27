import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {height, width} from '../../../Style/dimensions';
import {
  COLOR_DARK_PURPLE,
  COLOR_HIGHLIGHT_PURPLE,
  COLOR_ORANGE,
  COLOR_WHITE,
} from '../colors';
const MiniBox = ({active = false, value = '1h'}) => {
  return (
    <View style={{width: '16%', alignItems: 'center'}}>
      <View
        style={{
          paddingHorizontal: width(3),
          paddingVertical: height(2),
          borderWidth: 1,
          borderColor: active ? COLOR_ORANGE : COLOR_HIGHLIGHT_PURPLE,
          borderRadius: width(4),
          backgroundColor: active ? COLOR_ORANGE : COLOR_DARK_PURPLE,
        }}>
        <Text style={{color: active ? COLOR_DARK_PURPLE : COLOR_WHITE}}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default MiniBox;
