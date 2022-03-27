import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Images from '../../Assets/Images';
import {height, width} from '../../Style/dimensions';
import {
  COLOR_BRIGHT_BLUE,
  COLOR_DARK_BLACK,
  COLOR_LIGHT_VOILET,
  COLOR_WHITE,
} from './colors';
import BottomBox from './component/BottomBox';
import GradientCircle from './component/GradientCircle';
import Header from './component/Header';

const Dark_2 = () => {
  return (
    <View style={{backgroundColor: COLOR_DARK_BLACK, flex: 1}}>
      <Header icon={'arrow-back'} title={'Living Room'} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: width(5),
        }}>
        <Text style={{color: COLOR_LIGHT_VOILET, fontSize: width(5)}}>
          Temperature
        </Text>

        <View
          style={{
            backgroundColor: COLOR_BRIGHT_BLUE,
            width: width(13),
            height: width(13),
            borderRadius: width(50),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name={'power'}
            type={'ionicon'}
            size={width(6)}
            color={COLOR_WHITE}
          />
        </View>
      </View>

      <GradientCircle />
      <View style={{flexDirection: 'row', marginTop: height(5)}}>
        <BottomBox icon={'power'} />
        <BottomBox icon={'water'} type={'material-community'} />
        <BottomBox icon={'wb-sunny'} type={'material'} active={true} />
        <BottomBox icon={'fan'} type={'material-community'} />
      </View>
      <View style={{position: 'absolute', bottom: 0}}>
        <Image
          source={Images.BlueBackground}
          style={{height: height(40), width: width(100)}}
        />
      </View>
    </View>
  );
};

export default Dark_2;
