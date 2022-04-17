import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DarkBlue_2 from '../DarkBlue_2';
import React, {Component} from 'react';
import DarkBlue_1 from '../DarkBlue_1';
import {height, width} from '../../../Style/dimensions';
import {DARK_BLUE_COLORS} from '../colors';
import {Icon} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.main,
      }}>
      <Tab.Screen
        name="1"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={[styles.iconContainer]}>
              <Icon
                name="home-outline"
                type={'ionicon'}
                color={
                  focused
                    ? DARK_BLUE_COLORS.COLOR_WHITE
                    : DARK_BLUE_COLORS.COLOR_LIGHT_GRAY
                }
                size={26}
              />
            </View>
          ),
        }}
        component={DarkBlue_1}
      />
      <Tab.Screen
        name="2"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={[styles.iconContainer, {borderTopRightRadius: width(5)}]}>
              <Icon
                name="settings-remote"
                type={'material'}
                color={
                  focused
                    ? DARK_BLUE_COLORS.COLOR_WHITE
                    : DARK_BLUE_COLORS.COLOR_LIGHT_GRAY
                }
                size={26}
              />
            </View>
          ),
        }}
        component={DarkBlue_1}
      />
      <Tab.Screen
        name="plus"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_GRAY,
                width: '100%',
                borderTopEndRadius: width(4),
                borderTopStartRadius: width(4),
              }}>
              <View style={[styles.plusContainer]}>
                <LinearGradient
                  // useAngle={true}
                  // angle={60}
                  angleCenter={{x: 0.2, y: 0.0}}
                  colors={[
                    DARK_BLUE_COLORS.LIGHT_PEACH,
                    DARK_BLUE_COLORS.DARK_PEACH,
                  ]}
                  style={[styles.plusButton]}>
                  <Icon
                    name="add-outline"
                    type={'ionicon'}
                    color={DARK_BLUE_COLORS.COLOR_WHITE}
                    size={35}
                  />
                </LinearGradient>
              </View>
            </View>
          ),
        }}
        component={DarkBlue_1}
      />
      <Tab.Screen
        name="TV"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={[styles.iconContainer, {borderTopLeftRadius: width(5)}]}>
              <Icon
                name="tv-outline"
                type={'ionicon'}
                color={
                  focused
                    ? DARK_BLUE_COLORS.COLOR_WHITE
                    : DARK_BLUE_COLORS.COLOR_LIGHT_GRAY
                }
                size={26}
              />
            </View>
          ),
        }}
        component={DarkBlue_1}
      />
      <Tab.Screen
        name="setting"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={[styles.iconContainer]}>
              <Icon
                name="cog-outline"
                type={'ionicon'}
                color={
                  focused
                    ? DARK_BLUE_COLORS.COLOR_WHITE
                    : DARK_BLUE_COLORS.COLOR_LIGHT_GRAY
                }
                size={26}
              />
            </View>
          ),
        }}
        component={DarkBlue_1}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_GRAY,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },

  main: {
    backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    height: height(10),
    borderTopWidth: 0,
  },
  plusContainer: {
    width: width(20),
    height: width(20),
    borderRadius: width(10),
    backgroundColor: DARK_BLUE_COLORS.COLOR_DARK_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 23,
    zIndex: 1,
    left: 0,
    right: 0,
  },
  plusButton: {
    backgroundColor: DARK_BLUE_COLORS.COLOR_BRIGHT_GREEN,
    width: width(14),
    height: width(14),
    borderRadius: width(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default BottomTabs;
