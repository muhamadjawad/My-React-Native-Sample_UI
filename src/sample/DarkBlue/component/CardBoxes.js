import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {height, width} from '../../../Style/dimensions';
import {DARK_BLUE_COLORS} from '../colors';
const CardBoxes = () => {
  const RenderCard = ({type = 'material', name = 'heat-pump', title = ''}) => {
    return (
      <LinearGradient
        useAngle={true}
        angle={60}
        angleCenter={{x: 0.8, y: 0.5}}
        colors={[
          DARK_BLUE_COLORS.COLOR_DARK_BLACK,
          DARK_BLUE_COLORS.COLOR_DARK_BLACK,
          DARK_BLUE_COLORS.COLOR_DARK_BLACK,
          DARK_BLUE_COLORS.COLOR_SKY_BLUE,
        ]}
        style={{
          backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_BLACK,
          alignItems: 'center',
          paddingHorizontal: width(4),
          paddingVertical: height(3),
          borderRadius: width(8),
          marginHorizontal: width(2),
          borderWidth: 1,
          borderColor: DARK_BLUE_COLORS.COLOR_DARK_GRAY,
          marginTop: height(2),
        }}>
        <View style={{alignItems: 'center'}}>
          <Icon
            name={name}
            type={type}
            size={width(9)}
            color={DARK_BLUE_COLORS.COLOR_SKY_BLUE}
          />
        </View>
        <View style={{marginTop: height(1)}}>
          <Text style={[styles.heading]}>{title}</Text>
        </View>
        <View style={{marginTop: height(2)}}>
          <Text style={[styles.detail]}>x3 DEvices</Text>
        </View>
      </LinearGradient>
    );
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{width: '33%'}}>
        <RenderCard
          type={'material'}
          name={'wb-incandescent'}
          title={'Light'}
        />
      </View>
      <View style={{width: '33%'}}>
        <RenderCard name={'cloud'} type={'material'} title={'Weather'} />
      </View>
      <View style={{width: '33%'}}>
        <RenderCard name={'cloud'} type={'material'} title={'Humidity'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {color: DARK_BLUE_COLORS.COLOR_WHITE, fontSize: width(4.5)},

  detail: {
    color: DARK_BLUE_COLORS.COLOR_LIGHT_GRAY,
    fontSize: width(4),
  },
});
export default CardBoxes;
