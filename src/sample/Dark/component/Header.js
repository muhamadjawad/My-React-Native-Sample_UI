import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, width} from '../../../Style/dimensions';
import {COLOR_BRIGHT_BLUE, COLOR_WHITE} from '../colors';
const Header = ({icon = 'menu', title = 'Title'}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: width(5),
          marginTop: height(2),
        }}>
        <Icon
          type={'ionicon'}
          name={icon}
          color={COLOR_BRIGHT_BLUE}
          size={width(9)}
        />

        <View
          style={{
            height: width(10),
            width: width(10),
            borderWidth: 1,
            borderRadius: width(50),
            borderColor: COLOR_BRIGHT_BLUE,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            type={'ionicon'}
            name={'notifications'}
            color={COLOR_BRIGHT_BLUE}
            size={width(6)}
          />
        </View>
      </View>

      <View style={{paddingHorizontal: width(5), marginTop: height(2)}}>
        <Text
          style={{
            color: COLOR_WHITE,
            fontSize: width(6),
            fontFamily: 'cream-DEMO',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
