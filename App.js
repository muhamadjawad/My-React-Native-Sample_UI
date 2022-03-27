import React, {Component} from 'react';
import {View} from 'react-native';
import Analysis_1 from './src/sample/Analysis/Analysis_1';
import Analysis_2 from './src/sample/Analysis/Analysis_2';
import Dark_1 from './src/sample/Dark/Dark_1';
import Dark_2 from './src/sample/Dark/Dark_2';
import Light1 from './src/sample/Light/Light1';
import Light2 from './src/sample/Light/Light2';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Dark_2 />
    </View>
  );
};

export default App;
