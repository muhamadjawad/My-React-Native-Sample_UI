import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {width} from '../../../Style/dimensions';
import {
  COLOR_LIGHT_MELA,
  COLOR_PRIMARY,
  COLOR_PURPY,
  COLOR_SECONDARY,
} from '../colors';

const RenderIcon = ({
  name,
  size = width(5),
  active = false,
  iconMainContainer,
}) => {
  return (
    <View
      style={[
        styles.iconMainContainer,
        {
          backgroundColor: active ? 'transparent' : COLOR_LIGHT_MELA,
        },
        iconMainContainer,
      ]}>
      <View
        style={[
          styles.iconInnerContainer,
          {
            backgroundColor: active ? COLOR_PURPY : COLOR_PRIMARY,
          },
        ]}>
        <Icon
          name={name}
          type="ionicon"
          color={active ? COLOR_PRIMARY : COLOR_SECONDARY}
          size={size}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconMainContainer: {
    height: width(13),
    width: width(13),
    borderRadius: width(30),

    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconInnerContainer: {
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: '94%',
    width: '94%',
    borderRadius: width(100),
  },
});

export default RenderIcon;
