import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, width} from '../../../Style/dimensions';
import {COLOR_BRIGHT_BLUE, COLOR_LIGHT_VOILET} from '../colors';

const BottomBox = ({icon = 'power', type = 'ionicon', active = false}) => {
  return (
    <View
      style={{
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: width(16),
          height: width(16),
          borderRadius: width(50),
          borderWidth: 1,
          borderColor: active ? COLOR_BRIGHT_BLUE : COLOR_LIGHT_VOILET,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name={icon}
          type={type}
          size={width(7)}
          color={active ? COLOR_BRIGHT_BLUE : COLOR_LIGHT_VOILET}
        />
      </View>
    </View>
  );
};

export default BottomBox;
