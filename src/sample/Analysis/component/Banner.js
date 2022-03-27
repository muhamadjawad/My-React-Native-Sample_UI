import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {height, width} from '../../../Style/dimensions';
import {
  COLOR_DARK_PURPLE,
  COLOR_DULL_ORANGE,
  COLOR_DULL_YELLOW,
  COLOR_GREEN,
  COLOR_HIGHLIGHT_PEACH,
  COLOR_HIGHLIGHT_PURPLE,
  COLOR_LIGHT_PURPLE,
  COLOR_ORANGE,
  COLOR_WHITE,
} from '../colors';

import ProgressCircle from 'react-native-progress-circle';

const Banner = ({orange = false}) => {
  return (
    <View style={{alignItems: 'center', marginTop: height(3)}}>
      <View
        style={[
          styles.main,
          {backgroundColor: orange ? COLOR_ORANGE : COLOR_DARK_PURPLE},
        ]}>
        <View style={[styles.innerContainer]}>
          <View style={{flex: 0.3}}>
            <ProgressCircle
              percent={orange ? 30 : 70}
              radius={width(9)}
              borderWidth={6}
              color={orange ? COLOR_DULL_YELLOW : COLOR_GREEN}
              shadowColor={orange ? COLOR_DULL_ORANGE : COLOR_LIGHT_PURPLE}
              bgColor={orange ? COLOR_ORANGE : COLOR_DARK_PURPLE}>
              <Text
                style={{
                  fontSize: width(4),
                  color: COLOR_WHITE,
                  fontFamily: 'dum',
                }}>
                {orange ? '30%' : '75%'}
              </Text>
            </ProgressCircle>
          </View>
          <View style={{flex: 0.7}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: COLOR_WHITE,
                  fontSize: width(5),
                }}>
                {orange ? 'U.S' : 'Pakistan'}
              </Text>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: orange
                      ? 'transparent'
                      : COLOR_LIGHT_PURPLE,
                  },
                ]}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={[
                    styles.detailHead,
                    {
                      color: orange
                        ? COLOR_DULL_ORANGE
                        : COLOR_HIGHLIGHT_PURPLE,
                    },
                  ]}>
                  Deposit
                </Text>
                <Text style={[styles.detailValue]}>$5,100</Text>
              </View>
              <View style={{paddingLeft: width(5)}}>
                <Text
                  style={[
                    styles.detailHead,
                    {
                      color: orange
                        ? COLOR_DULL_ORANGE
                        : COLOR_HIGHLIGHT_PURPLE,
                    },
                  ]}>
                  Rate
                </Text>
                <Text style={[styles.detailValue]}>+12.90%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailHead: {color: COLOR_HIGHLIGHT_PURPLE, fontSize: width(4.5)},
  detailValue: {color: COLOR_WHITE, fontSize: width(4)},

  main: {
    height: height(20),
    width: width(90),
    borderRadius: width(10),
    backgroundColor: COLOR_DARK_PURPLE,
    elevation: 2,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingHorizontal: width(5),
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  circle: {
    height: width(12),
    width: width(12),
    backgroundColor: COLOR_LIGHT_PURPLE,
    borderRadius: width(50),
  },
});
export default Banner;
