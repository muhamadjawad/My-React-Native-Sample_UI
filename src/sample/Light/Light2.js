import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../../Assets/Images';
import {height, width} from '../../Style/dimensions';
import {
  COLOR_BLACK,
  COLOR_LIGHT_MELA,
  COLOR_PRIMARY,
  COLOR_PURPY,
  COLOR_SECONDARY,
  COLOR_WHITE,
} from './colors';
import RenderIcon from './component/RenderIcon';
import Slider from 'azir-slider';

const Light2 = () => {
  return (
    <View style={[styles.main]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: height(2),
        }}>
        <View style={[styles.topContainer]}>
          <RenderIcon name={'arrow-back-outline'} />
        </View>
        <View style={[styles.topContainer, {flex: 0.6}]}>
          <Text
            style={{
              fontFamily: 'Monea Alegante',
              fontSize: width(7),
            }}>
            My PortFolio
          </Text>
        </View>
        <View style={[styles.topContainer]}>
          <RenderIcon name={'menu-outline'} />
        </View>
      </View>

      <View style={{marginTop: height(3)}}>
        <View style={[styles.imageContainer]}>
          <Image
            source={Images.me}
            style={{
              width: '94%',
              height: '94%',

              borderRadius: width(100), // '100%',
            }}
          />
        </View>
      </View>

      <View style={{marginTop: height(3)}}>
        <Text style={[styles.centerText, {color: COLOR_SECONDARY}]}>
          Loose It
        </Text>
        <Text style={[styles.centerText]}>Flume</Text>
      </View>

      <View style={{marginTop: height(4)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.durationText]}>1:23</Text>
          <Text style={[styles.durationText]}>3:00</Text>
        </View>
        <View>
          <Slider
            minimumValue={0}
            maximumValue={100}
            value={80}
            humbColor="black"
            trackColor={COLOR_LIGHT_MELA}
            progressTrackColor={COLOR_PURPY}
            thumbStyle={[styles.thumb]}
            trackStyle={[styles.track]}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: height(5)}}>
        <View style={[styles.bottomItem]}>
          <RenderIcon
            name={'play-back'}
            size={width(8)}
            iconMainContainer={{height: width(17), width: width(17)}}
          />
        </View>
        <View style={[styles.bottomItem]}>
          <RenderIcon
            name={'play'}
            active={true}
            size={width(8)}
            iconMainContainer={{height: width(17), width: width(17)}}
          />
        </View>
        <View style={[styles.bottomItem]}>
          <RenderIcon
            name={'play-forward'}
            size={width(8)}
            iconMainContainer={{height: width(17), width: width(17)}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {backgroundColor: COLOR_PRIMARY, flex: 1, alignItems: 'center'},
  topContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: width(60),
    height: width(60),
    borderRadius: width(100),
    backgroundColor: COLOR_PRIMARY,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerText: {
    fontFamily: 'cream-DEMO',
    fontSize: width(5),
    textAlign: 'center',
  },

  bottomItem: {flex: 0.3, alignItems: 'center'},
  thumb: {
    backgroundColor: COLOR_PURPY,
    borderRadius: width(30),
    borderWidth: 6,
    borderColor: COLOR_LIGHT_MELA,
  },
  track: {height: height(0.7), width: width(80), elevation: 1},
  durationText: {
    fontFamily: 'cream-DEMO',
    fontSize: width(3.5),
    textAlign: 'center',
  },
});

export default Light2;
