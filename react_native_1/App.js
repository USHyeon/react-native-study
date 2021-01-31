import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        value={count}
        minimumTrackTintColor="#FFFF00"
        maximumTrackTintColor="#000000"
        onValueChange={value => setCount(value)}
        step={10}
      />

      <Text>Hellow {count}</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
