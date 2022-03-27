import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Images from '../../Assets/Images';
import {height, width} from '../../Style/dimensions';
import {
  COLOR_BRIGHT_BLUE,
  COLOR_DARK_BLACK,
  COLOR_LIGHT_VOILET,
  COLOR_WHITE,
} from './colors';
import Header from './component/Header';
import RenderBox from './component/RenderBox';
const Dark_1 = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLOR_DARK_BLACK}}>
      <Header icon="menu" title="All Room" />

      <View
        style={{
          marginTop: height(2),
          paddingHorizontal: width(3),
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <RenderBox value={'Bed Room'} icon={'bed'} />

        <RenderBox value={'Living Room'} icon={'weekend'} type={'material'} />
        <RenderBox value={'Library'} icon={'library'} />
        <RenderBox
          value={'Dining Room'}
          icon={'restaurant'}
          type={'material'}
        />

        <RenderBox
          value={'Utility Room'}
          icon={'dishwasher'}
          type={'material-community'}
        />
        <RenderBox value={'Bath Room'} icon={'bathtub'} type={'material'} />

        {/* <View style={{flexBasis: '50%', backgroundColor: 'cyan'}}></View> */}
      </View>

      <View style={{position: 'absolute', bottom: 0}}>
        <Image
          source={Images.BlueBackground}
          style={{height: height(30), width: width(100)}}
        />
      </View>
    </View>
  );
};

export default Dark_1;
