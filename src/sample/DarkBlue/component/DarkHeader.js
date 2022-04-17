import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Images from '../../../Assets/Images';
import {height, width} from '../../../Style/dimensions';
import {DARK_BLUE_COLORS} from '../colors';

const DarkHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width(90),
        marginTop: height(1.5),
      }}>
      <View style={[Styles.imageContainer]}>
        <Icon
          name="grid-view"
          type="material"
          color={DARK_BLUE_COLORS.COLOR_WHITE}
          size={width(5)}
        />
      </View>
      <View>
        <Text style={[Styles.text]}>PROHOME</Text>
      </View>
      <View style={[Styles.imageContainer]}>
        <Image
          source={Images.userAvatar}
          style={{height: '46%', width: '46%'}}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_GRAY,
    width: width(14),
    height: width(14),
    borderRadius: width(50),
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: height(1),
  },
  text: {
    fontSize: width(4),
    color: DARK_BLUE_COLORS.COLOR_YELLOW,
  },
});
export default DarkHeader;
