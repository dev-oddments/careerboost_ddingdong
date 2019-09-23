import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './Button';

const eachButton = [
  ['C', 'CE', 'M', '←'],
  [7, 8, 9, '÷'],
  [4, 5, 6, '×'],
  [1, 2, 3, '-'],
  [0, '.', '=', '+'],
];

class Calc extends Component {
  _renderButtons() {
    let buttonComplete = eachButton.map(row => {
      let buttonRow = row.map(eachButton => {
        return <Button value={eachButton} />;
      });

      return <View style={styles.buttonRow}>{buttonRow}</View>;
    });

    return buttonComplete;
  }

  render() {
    return (
      <View style={styles.baseContainer}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayBorder}>
            <Text style={styles.displayText}>0.00</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>{this._renderButtons()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(217, 233, 231)',
    justifyContent: 'space-between',
  },
  displayContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'black',
    height: '25%',
  },
  buttonContainer: {
    aspectRatio: 4 / 5,
    width: '100%',
    backgroundColor: 'rgb(217, 233, 231)',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
  },
  displayBorder: {
    alignItems: 'center',
    backgroundColor: 'rgb(219,217,192)',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
  },
  displayText: {
    color: 'gray',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: 'Helvetica',
  },
});

export default Calc;
