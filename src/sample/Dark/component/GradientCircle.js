import React from 'react';
import {Text, View} from 'react-native';
import {
  CircularProgress,
  GradientCircularProgress,
} from 'react-native-circular-gradient-progress';
import ProgressCircle from 'react-native-progress-circle';
import {height, width} from '../../../Style/dimensions';
import {
  COLOR_DULL_YELLOW,
  COLOR_DULL_ORANGE,
  COLOR_WHITE,
  COLOR_DARK_BLACK,
  COLOR_LIGHT_VOILET,
  COLOR_BRIGHT_BLUE,
  COLOR_BLACK,
  COLOR_DARK_GRAY,
} from '../colors';

const GradientCircle = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height(4),
      }}>
      <GradientCircularProgress
        strokeWidth={6}
        startColor={COLOR_BRIGHT_BLUE}
        middleColor={COLOR_LIGHT_VOILET}
        endColor={COLOR_WHITE}
        emptyColor={COLOR_DARK_BLACK}
        size={width(55)}
        progress={80}>
        <View
          style={{
            position: 'absolute',
            right: width(21),
            // left: width(25),
            top: width(24),
          }}>
          <Text style={{fontSize: width(8), color: COLOR_BRIGHT_BLUE}}>
            80%
          </Text>
        </View>
      </GradientCircularProgress>
      {/* <ProgressCircle
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
      </ProgressCircle> */}
    </View>
  );
};

export default GradientCircle;
