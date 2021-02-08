import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Supertext = props => {
  return (
    <Text
      //   style={styles.supertext}
      //   {...props}
      style={[styles.supertext, props.style]}>
      {props.children}
    </Text>
  );
};

export default Supertext;

const styles = StyleSheet.create({
  supertext: {
    backgroundColor: 'skyblue',
    fontSize: 25,
    color: 'blue',
    padding: 15,
    width: 300,
  },
});
