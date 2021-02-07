import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Getting the fucking weather</Text>
      </View>
    );
  }
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },

  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
