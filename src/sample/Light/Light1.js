import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import {
  COLOR_SECONDARY,
  COLOR_HIGHLIGHT,
  COLOR_PRIMARY,
  COLOR_PURPY,
  COLOR_WHITE,
} from './colors';
import {Icon} from 'react-native-elements';
import {height, width} from '../../Style/dimensions';
import Images from '../../Assets/Images';
const Light1 = props => {
  const DATA = [
    {title: 'Jawad', detail: 'my portfolio', active: false},
    {title: 'Jawad', detail: 'my portfolio', active: false},
    {title: 'Jawad', detail: 'my portfolio', active: true},
    {title: 'Jawad', detail: 'my portfolio', active: false},
    {title: 'Jawad', detail: 'my portfolio', active: false},
  ];
  const RenderIcon = ({name, size = width(5), active = false}) => {
    return (
      <View
        style={[
          styles.iconMainContainer,
          {
            backgroundColor: active ? 'transparent' : COLOR_HIGHLIGHT,
          },
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

  const RenderItem = item => {
    return (
      <View
        style={[
          styles.itemContainer,
          {backgroundColor: item.active ? COLOR_HIGHLIGHT : 'transparent'},
        ]}>
        <View style={[styles.horizontal, {alignItems: 'flex-start'}]}>
          <View>
            <Text
              style={{
                color: COLOR_SECONDARY,
                fontFamily: 'cream-DEMO',
                fontSize: width(4.5),
              }}>
              {item.title}
            </Text>
            <Text style={{fontFamily: 'cream-DEMO', fontSize: width(4)}}>
              {item.detail}
            </Text>
          </View>
        </View>
        <View style={[styles.horizontal, {flex: 0.2, alignItems: 'flex-end'}]}>
          <RenderIcon name={'heart'} active={item.active} />
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.main]}>
      <View style={{marginTop: height(3)}}>
        <Text
          style={{
            // color: COLOR_SECONDARY,
            fontFamily: 'Monea Alegante',
            fontSize: width(7),
          }}>
          My PortFolio
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: height(6)}}>
        <View style={[styles.topContainer]}>
          <RenderIcon name={'heart'} />
        </View>
        <View style={[styles.topContainer, {flex: 0.6}]}>
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
        <View style={[styles.topContainer]}>
          <RenderIcon name={'ellipsis-horizontal'} />
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={({item, index}) => RenderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {backgroundColor: COLOR_PRIMARY, flex: 1, alignItems: 'center'},

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

  topContainer: {flex: 0.3, alignItems: 'center', justifyContent: 'center'},
  imageContainer: {
    width: width(37),
    height: width(37),
    borderRadius: width(100),
    backgroundColor: COLOR_PRIMARY,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: width(90),
    paddingHorizontal: width(2),
    paddingVertical: height(2),

    borderRadius: width(3),
    marginTop: height(1),
  },
});

export default Light1;
