import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, width} from '../../../Style/dimensions';
import {COLOR_BRIGHT_BLUE, COLOR_LIGHT_VOILET, COLOR_WHITE} from '../colors';

const RenderBox = ({value, icon = 'menu', type = 'ionicon'}) => {
  return (
    <View
      style={{
        flexBasis: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: height(1),
      }}>
      <View
        style={{
          width: '85%',
          borderWidth: 1,
          borderColor: COLOR_LIGHT_VOILET,
          alignItems: 'center',
          borderRadius: width(2),
          paddingVertical: height(3),
        }}>
        <Icon
          type={type}
          name={icon}
          color={COLOR_BRIGHT_BLUE}
          size={width(10)}
        />
        <Text
          style={{
            color: COLOR_WHITE,
            fontSize: width(5.5),
            marginTop: height(1),
          }}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default RenderBox;
