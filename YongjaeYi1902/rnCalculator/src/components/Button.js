import React, {Component} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class Button extends Component {
  render() {
    return (
        <TouchableHighlight
        style={[
          styles.inputButton,
          this.props.highlight ? styles.inputButtonHighlighted : null,
        ]}
        underlayColor="gray"
        onPress={this.props.onPress}>
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
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',

    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },

  inputButtonHighlighted: {
    backgroundColor: 'gray',
  },

  inputButtonText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
});
