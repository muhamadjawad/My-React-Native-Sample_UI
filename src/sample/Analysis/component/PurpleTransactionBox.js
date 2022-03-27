import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, width} from '../../../Style/dimensions';
import {
  COLOR_GREEN,
  COLOR_HIGHLIGHT_PURPLE,
  COLOR_PEACH,
  COLOR_WHITE,
} from '../colors';
const PurpleTransactionBox = ({red = false}) => {
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
            backgroundColor: COLOR_HIGHLIGHT_PURPLE,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={red ? 'logo-xing' : 'logo-dropbox'}
            type="ionicon"
            color={COLOR_WHITE}
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
          <Text style={[styles.topText, {color: COLOR_WHITE}]}>
            {red ? 'Sell' : 'Buy'}
          </Text>
          <Text style={[styles.bottomText]}>BTC</Text>
        </View>
        <View>
          <Text style={[styles.topText, {color: COLOR_WHITE}]}>
            {red ? '-$2.01' : '+$24.0'}
          </Text>
          <Text
            style={[
              styles.bottomText,
              {textAlign: 'right', color: red ? COLOR_PEACH : COLOR_GREEN},
            ]}>
            23 Dec
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomText: {color: COLOR_HIGHLIGHT_PURPLE, fontSize: width(4.2)},
  topText: {
    //   fontWeight: 'bold',
    fontSize: width(4.5),
  },
});
export default PurpleTransactionBox;
