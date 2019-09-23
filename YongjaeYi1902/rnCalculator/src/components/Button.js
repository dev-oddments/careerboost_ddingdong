import React, {Component} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.inputButton}>
        <Text style={styles.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  inputButton: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: 'rgb(29, 28, 32)',
    borderColor: 'rgb(217, 233, 231)',
    borderRadius: 100,
    borderWidth: 3,
    flex: 1,
    justifyContent: 'center',
  },

  inputButtonHighlighted: {
    backgroundColor: '#193441',
  },

  inputButtonText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
});
