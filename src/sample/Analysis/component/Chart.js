import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {height, width} from '../../../Style/dimensions';
import {
  COLOR_DARK_PURPLE,
  COLOR_GREEN,
  COLOR_LIGHT_PURPLE,
  COLOR_RED,
  COLOR_WHITE,
} from '../colors';

const Chart = () => {
  return (
    <View>
      <LineChart
        data={{
          //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={width(110)} // from react-native
        height={height(30)}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        withInnerLines={false}
        withOuterLines={false}
        // withVerticalLabels={false}
        // withHorizontalLabels={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //   backgroundColor: COLOR_RED,
          backgroundGradientFrom: COLOR_DARK_PURPLE,
          backgroundGradientTo: COLOR_DARK_PURPLE,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => COLOR_GREEN,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: COLOR_DARK_PURPLE,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Chart;
