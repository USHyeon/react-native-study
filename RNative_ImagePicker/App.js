/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

const askPermission = async () => {
  try {
    const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (result === RESULTS.GRANTED) {
      // do something
    }
  } catch (error) {
    console.log('askPermission', error);
  }
};

const App = () => {
  const [avatar, setAvatar] = useState();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{
            flexGrow: 3,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          style={styles.scrollView}>
          <Text>Hello</Text>
          <Image source={{uri: avatar}} style={styles.avatar} />
          <View
            style={{
              backgroundColor: 'blue',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <View style={{}}>
              <Button
                title="Add an Image"
                style={styles.buttonAdd}
                onPress={() =>
                  launchImageLibrary({}, (response) => {
                    setAvatar(response.uri);
                  })
                }
              />
              <Button
                title="Add an Camera"
                style={styles.buttonAdd}
                onPress={() =>
                  launchCamera({}, (response) => {
                    setAvatar(response.uri);
                  })
                }
              />
              <Button
                title="console button"
                onPress={() => console.log('button Click!!!')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'yellow',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
  buttonAdd: {
    backgroundColor: '#387656',
    height: 48,
  },
});

export default App;
