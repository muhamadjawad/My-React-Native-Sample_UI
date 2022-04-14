import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../../Assets/Images';
import {height, width} from '../../../Style/dimensions';
import {DARK_BLUE_COLORS} from '../colors';
const Energy = () => {
  return (
    <View
      style={{
        marginTop: height(3),
      }}>
      <LinearGradient
        useAngle={true}
        angle={160}
        angleCenter={{x: 0.2, y: 1}}
        colors={[
          DARK_BLUE_COLORS.COLOR_BLUE,
          DARK_BLUE_COLORS.COLOR_BLUE,

          // DARK_BLUE_COLORS.COLOR_DARK_GRAY,

          DARK_BLUE_COLORS.COLOR_BRIGHT_GREEN,
        ]}
        style={{
          flexDirection: 'row',
          backgroundColor: DARK_BLUE_COLORS.COLOR_BRIGHT_GREEN,
          width: width(95),
          borderRadius: width(10),
          paddingVertical: height(1),
        }}>
        <View
          style={{flex: 0.7, paddingLeft: width(5), justifyContent: 'center'}}>
          <Text style={[styles.energy]}>Energy</Text>
          <View style={{marginTop: height(1)}}>
            <Text style={[styles.speed]}>16.4 Kwh</Text>
          </View>
          <View style={{marginTop: height(0.5)}}>
            <Text style={[styles.detail]}>3 Device turn on</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Images.energy}
            style={{
              width: width(12),
              height: height(20),
              resizeMode: 'contain',
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  energy: {
    fontSize: width(5),
    color: DARK_BLUE_COLORS.COLOR_LIGHT_GRAY,
  },
  speed: {
    fontSize: width(4.5),
    color: DARK_BLUE_COLORS.COLOR_WHITE,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: width(4),
    color: DARK_BLUE_COLORS.COLOR_LIGHT_GRAY,
  },
});
export default Energy;
