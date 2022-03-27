import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, width} from '../../Style/dimensions';
import {
  COLOR_DARK_PURPLE,
  COLOR_DULL_PURPLE,
  COLOR_HIGHLIGHT_PURPLE,
  COLOR_LIGHT_PURPLE,
  COLOR_WHITE,
} from './colors';
import Chart from './component/Chart';
import MiniBox from './component/MiniBox';
import PurpleTransactionBox from './component/PurpleTransactionBox';
const Analysis_2 = () => {
  return (
    <View style={[styles.main]}>
      <View style={{flexDirection: 'row', marginTop: height(3)}}>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <Icon name={'close'} type={'ionicon'} color={COLOR_WHITE} />
        </View>
        <View style={{flex: 0.8, paddingLeft: width(4)}}>
          <Text style={[styles.heading]}>Jawad's Wallet Analysis</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: height(2),
        }}>
        <View
          style={{flex: 0.5, alignItems: 'flex-end', paddingRight: width(10)}}>
          <Text style={[styles.topText]}>Deposit</Text>
          <Text style={[styles.bottomText]}>$5,100</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={[styles.topText]}>Rate</Text>
          <Text style={[styles.bottomText]}>$5,100</Text>
        </View>
      </View>

      <Chart />
      <View style={{flexDirection: 'row', marginTop: height(1)}}>
        <MiniBox value={'1h'} />
        <MiniBox value={'24h'} />
        <MiniBox value={'1w'} active={true} />
        <MiniBox value={'1m'} />
        <MiniBox value={'1y'} />
        <MiniBox value={'All'} />
      </View>

      <View
        style={{
          marginHorizontal: width(2),
          marginTop: height(3),
          backgroundColor: COLOR_DULL_PURPLE,
          borderTopEndRadius: width(13),
          borderTopStartRadius: width(13),
          paddingVertical: height(2),
        }}>
        <Icon
          name={'chevron-up'}
          type={'ionicon'}
          color={COLOR_LIGHT_PURPLE}
          size={width(10)}
        />

        <PurpleTransactionBox />
        <PurpleTransactionBox red={true} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR_DARK_PURPLE,
  },
  heading: {
    fontSize: width(7),
    color: COLOR_WHITE,
    fontFamily: 'dum',
  },
  bottomText: {
    color: COLOR_WHITE,
    fontSize: width(4.5),
    marginTop: height(0.5),
  },
  topText: {color: COLOR_HIGHLIGHT_PURPLE, fontSize: width(4.5)},
});
export default Analysis_2;
