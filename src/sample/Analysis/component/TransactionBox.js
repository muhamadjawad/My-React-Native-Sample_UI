import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {fonts} from 'react-native-elements/dist/config';
import {height, width} from '../../../Style/dimensions';
import {
  COLOR_DARK_PURPLE,
  COLOR_GREEN,
  COLOR_HIGHLIGHT_GREEN,
  COLOR_HIGHLIGHT_PEACH,
  COLOR_PEACH,
} from '../colors';
const TransactionBox = ({sell = false}) => {
  return (
    <View
      style={{
        width: width(90),
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: height(2),
      }}>
      <View style={{flex: 0.25}}>
        <View
          style={{
            height: width(16),
            width: width(16),
            borderRadius: width(5),
            backgroundColor: sell
              ? COLOR_HIGHLIGHT_PEACH
              : COLOR_HIGHLIGHT_GREEN,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={sell ? 'chevron-down' : 'chevron-up'}
            type="ionicon"
            color={sell ? COLOR_PEACH : COLOR_GREEN}
            size={width(9)}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.75,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={[styles.topText, {color: COLOR_DARK_PURPLE}]}>
            {sell ? 'Sell' : 'Buy'}
          </Text>
          <Text style={[styles.bottomText]}>BTC</Text>
        </View>
        <View>
          <Text
            style={[styles.topText, {color: sell ? COLOR_PEACH : COLOR_GREEN}]}>
            {sell ? '-$2.01' : '+$24.0'}
          </Text>
          <Text style={[styles.bottomText, {textAlign: 'right'}]}>23 Dec</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomText: {color: '#d0d0d3', fontSize: width(4.2)},
  topText: {
    //   fontWeight: 'bold',
    fontSize: width(4.5),
  },
});
export default TransactionBox;
