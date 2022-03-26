import React, {Component} from 'react';
import {View} from 'react-native';
import Light1 from './src/sample/Light/Light1';
import Light2 from './src/sample/Light/Light2';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Light2 />
    </View>
  );
};

export default App;
