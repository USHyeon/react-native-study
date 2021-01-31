import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Generator = props => {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={() => props.add()} />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
