import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Images from '../../Assets/Images';
import {height, width} from '../../Style/dimensions';
import {COLOR_WHITE} from '../Analysis/colors';
import {DARK_BLUE_COLORS} from './colors';
import CardBoxes from './component/CardBoxes';
import CurrentWeather from './component/CurrentWeather';
import DarkHeader from './component/DarkHeader';
import DeviceHeader from './component/DeviceHeader';
import Energy from './component/Energy';
const DarkBlue_1 = () => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_BLACK}}>
      <View
        style={{
          backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_BLACK,
          flex: 1,
          alignItems: 'center',
        }}>
        <DarkHeader />

        <CurrentWeather />

        <Energy />
        <DeviceHeader />
        <CardBoxes />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_GRAY,
    width: width(17),
    height: width(17),
    borderRadius: width(50),
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: height(1),
  },
});

export default DarkBlue_1;
