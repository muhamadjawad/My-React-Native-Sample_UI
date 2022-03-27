import React from 'react';
import {Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {height, width} from '../../../Style/dimensions';
import {
  COLOR_DULL_YELLOW,
  COLOR_DULL_ORANGE,
  COLOR_WHITE,
  COLOR_DARK_BLACK,
  COLOR_LIGHT_VOILET,
  COLOR_BRIGHT_BLUE,
} from '../colors';

const GradientCircle = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height(4),
      }}>
      <ProgressCircle
        percent={70}
        radius={width(25)}
        borderWidth={15}
        color={COLOR_BRIGHT_BLUE}
        shadowColor={COLOR_LIGHT_VOILET}
        bgColor={COLOR_DARK_BLACK}>
        <Text
          style={{
            fontSize: width(11),
            color: COLOR_WHITE,
          }}>
          {'25'}
        </Text>
      </ProgressCircle>
    </View>
  );
};

export default GradientCircle;
