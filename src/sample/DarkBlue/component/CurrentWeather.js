import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../../Assets/Images';
import {height, width} from '../../../Style/dimensions';
import {DARK_BLUE_COLORS} from '../colors';
const CurrentWeather = props => {
  return (
    <LinearGradient
      useAngle={true}
      angle={60}
      angleCenter={{x: 0.1, y: 0.0}}
      colors={[
        DARK_BLUE_COLORS.COLOR_LIGHT_GRAY,
        DARK_BLUE_COLORS.COLOR_DARK_BLACK,
        DARK_BLUE_COLORS.COLOR_DARK_BLACK,
      ]}
      style={[styles.main]}>
      <View style={[styles.column]}>
        <View
          style={{
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -height(7),
          }}>
          <Image
            source={Images.cloudStorm2}
            style={{
              // width: width(2),
              height: height(19),
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{paddingLeft: width(5)}}>
          <Text
            style={[styles.text, {fontSize: width(4.8), fontWeight: 'bold'}]}>
            Heavy Rain
          </Text>
          <Text style={[styles.text, {fontSize: width(4)}]}>Tonight</Text>
        </View>
      </View>
      <View style={[styles.column]}>
        <Text style={[styles.temperatureText]}>27*</Text>
        <Text style={[styles.text, {fontSize: width(5)}]}>Feels like 32*</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  column: {flex: 0.5},
  text: {color: DARK_BLUE_COLORS.COLOR_WHITE},
  temperatureText: {
    fontSize: width(10),
    color: DARK_BLUE_COLORS.COLOR_LIGHT_GRAY,
    fontWeight: 'bold',
  },

  main: {
    marginTop: height(3),
    backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_GRAY,
    width: width(95),
    borderRadius: width(8),
    paddingVertical: height(2),
    flexDirection: 'row',
    marginTop: height(5),
    borderWidth: 1,
    borderColor: DARK_BLUE_COLORS.COLOR_DARK_GRAY,
  },
});

export default CurrentWeather;
