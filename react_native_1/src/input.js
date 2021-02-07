import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

class Input extends Component {
  state = {
    myTextInput: 'initText',
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };
  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          style={styles.input}
          value={this.state.myTextInput}
          onChangeText={this.onChangeInput} //Event property
          multiline={true}
          maxLength={100}
          autoCapitalize={'none'}
          editable={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default Input;
