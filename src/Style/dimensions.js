import {Dimensions} from 'react-native';

export const width = val => {
  return Dimensions.get('window').width * (val / 100);
};

export const height = val => {
  return Dimensions.get('window').height * (val / 100);
};
