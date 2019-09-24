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
  constructor(props) {
    super(props);
    this.initialState = {
      clickedSymbol: null,
      inputVal: '',
      memoryNum: '',
      memoryTrigger: false,
      prevInputVal: '',
      prevIsNum: false,
    };
    this.state = this.initialState;
  }

  _renderButtons() {
    let buttonComplete = eachButton.map((row, rowKey) => {
      let buttonRow = row.map((buttonValue, eachKey) => {
        return (
          <Button
            key={eachKey}
            value={buttonValue}
            highlight={this.state.clickedSymbol === buttonValue}
            onPress={this._buttonPress.bind(this, buttonValue)}
          />
        );
      });
      return (
        <View key={rowKey} style={styles.buttonRow}>
          {buttonRow}
        </View>
      );
    });
    return buttonComplete;
  }

  _buttonPress(input) {
    if (isNaN(input) == false) {
      return this._isNumber(input);
    } else {
      return this._isString(input);
    }
  }

  _isNumber(num) {
    let inputVal = String(this.state.inputVal) + num;
    this.setState({
      inputVal: inputVal,
      prevIsNum: true,
    });
  }

  _isString(str) {
    switch (str) {
      case 'C':
        this.setState({
          inputVal: '',
          prevIsNum: false,
        });
        break;
      case 'CE':
        this.setState(this.initialState);
        break;
      case 'M':
        if (this.state.memoryTrigger === false) {
          this.setState({
            inputVal: '',
            memoryNum: this.state.inputVal,
            memoryTrigger: true,
            prevIsNum: false,
          });
        } else {
          this.setState({
            inputVal: this.state.memoryNum,
            memoryNum: '',
            memoryTrigger: false,
            prevIsNum: true,
          });
        }
        break;
      case '←':
        this.setState({inputVal: String(this.state.inputVal).slice(0, -1)});
        break;
      case '÷':
        this.setState({
          inputVal: '',
          clickedSymbol: '/',
          prevInputVal: this.state.inputVal,
          prevIsNum: false,
        });
        break;
      case '×':
        this.setState({
          inputVal: '',
          clickedSymbol: '*',
          prevInputVal: this.state.inputVal,
          prevIsNum: false,
        });
        break;
      case '-':
      case '+':
        this.setState({
          inputVal: '',
          clickedSymbol: str,
          prevInputVal: this.state.inputVal,
          prevIsNum: false,
        });
        break;
      case '=':
        let symbol = this.state.clickedSymbol;
        let inputVal = this.state.inputVal;
        let prevInputVal = this.state.prevInputVal;
        if (!symbol) {
          return;
        }
        if (this.state.prevIsNum == true) {
          this.setState({
            clickedSymbol: null,
            prevInputVal: '',
            prevIsNum: false,
            inputVal: eval(String(prevInputVal) + symbol + String(inputVal)),
          });
        }
        break;
      case '.':
        var triggerDot = String(this.state.inputVal).includes('.');
        if (triggerDot === false) {
          this.setState({inputVal: this.state.inputVal + '.'});
        } else {
          return;
        }
    }
  }

  render() {
    return (
      <View style={styles.baseContainer}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayBorder}>
            <Text style={styles.displayText}>{this.state.inputVal}</Text>
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
    borderRadius: 40,

    elevation: 19,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
  },
  displayContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'black',
    height: '25%',
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
    fontSize: 43,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: 'Helvetica',
  },
  buttonContainer: {
    aspectRatio: 4 / 5,
    width: '100%',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Calc;
