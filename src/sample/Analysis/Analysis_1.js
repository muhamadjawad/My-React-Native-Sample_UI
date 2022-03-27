import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Images from '../../Assets/Images';
import {height, width} from '../../Style/dimensions';
import {
  COLOR_DARK_PURPLE,
  COLOR_DULL_PURPLE,
  COLOR_GREEN,
  COLOR_LIGHT_PURPLE,
  COLOR_WHITE,
} from './colors';
import ProgressCircle from 'react-native-progress-circle';
import Banner from './component/Banner';
import TransactionBox from './component/TransactionBox';

const Analysis_1 = () => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.topContainer]}>
        <View style={[styles.imageContainer]}>
          <Image source={Images.me} style={[styles.roundImage]} />
        </View>
        <View style={{marginLeft: width(4)}}>
          <Icon
            name={'options'}
            type={'ionicon'}
            size={width(8)}
            color={COLOR_DARK_PURPLE}
          />
        </View>
      </View>

      <View style={{marginTop: height(3), paddingHorizontal: width(3)}}>
        <Text style={[styles.heading]}>Portfolio</Text>
      </View>

      <Banner />
      <Banner orange={true} />

      <View style={{marginTop: height(2), paddingHorizontal: width(3)}}>
        <Text style={[styles.heading]}>Transcation</Text>
      </View>
      <TransactionBox />
      <TransactionBox sell={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: COLOR_WHITE},

  topContainer: {
    flexDirection: 'row',
    marginTop: height(3),
    alignItems: 'center',
    paddingHorizontal: width(3),
  },

  imageContainer: {
    width: width(10),
    height: width(10),
    borderRadius: width(50),
    elevation: 6,
  },
  roundImage: {width: '100%', height: '100%', borderRadius: width(50)},

  heading: {
    fontSize: width(7),
    color: COLOR_DARK_PURPLE,
    fontFamily: 'dum',
  },
});
export default Analysis_1;
