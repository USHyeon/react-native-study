import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";

import Loading from "./Loading";

const API_KEY = "9e208d6ad051776a9b8a1d79738f47b8";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); //위치 권한 흭득
      // const location = await Location.getCurrentPositionAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.setState({
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
      Alert.alert("can't fondd you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
