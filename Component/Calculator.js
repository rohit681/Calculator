import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Button from './Button';
import Screen from './Screen';
import History from './History';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      result: '',
      actualExpression: '',
      isHistoryVisible: false,
      isEqualPress: false,
      historyarr: [],
    };
    this.historyarrRef = React.createRef();
  }

  showHistory = () => {
    this.setState({ isHistoryVisible: true });
  };

  closeHistory = () => {
    this.setState({ isHistoryVisible: false });
  };

  getButtonPressedVal = (buttonPressed) => {
    const { expression, actualExpression, isEqualPress, result } = this.state;
    let newExpression;
    let newActalExp ;
    if (isEqualPress) {
      newExpression = `${buttonPressed}`;

    } else newExpression = `${expression}${buttonPressed}`;

    //console.log(newExpression);

    this.setState({
      expression: newExpression,
    });

    let actualChar = buttonPressed;
    if (actualChar === '÷') {
      actualChar = '/';
    } else if (actualChar === '×') {
      actualChar = '*';
    } else if (actualChar === '−') {
      actualChar = '-';
    }

    if(isEqualPress){newActalExp=`${actualChar}`}
    else{
    newActalExp = `${actualExpression}${actualChar}`;
    }
    
    this.setState({
      actualExpression: newActalExp,
      isEqualPress:false
    });

    try {
      this.setState({
        result: eval(newActalExp).toString(),
      });
    } catch (e) {
      console.log('error');
    }
  };

  allClear = () => {
    this.setState({
      expression: '',
      result: '',
      actualExpression: '',
    });
  };

  del = () => {
    const { expression, actualExpression, result, prevRes } = this.state;
    let newActalExp = actualExpression.substring(
      0,
      actualExpression.length - 1
    );
    this.setState({
      expression: expression.substring(0, expression.length - 1),
      actualExpression: newActalExp,
    });
    try {
      this.setState({
        result: eval(newActalExp).toString(),
      });
    } catch (e) {
      try {
        this.setState({
          result: eval(
            newActalExp.substring(0, expression.length - 2)
          ).toString(),
        });
      } catch (e) {
        this.setState({ expression: '', result: '', actualExpression: '' });
      }
    }
  };

  onEqualPress = () => {
    const { expression, result, historyarr, isEqualPress } = this.state;
    const hist = { expression, result };
    if (expression != '') {
      historyarr.push(hist);
    }
    this.setState({
      historyarr: historyarr,
      expression: result,
      result: '',
      isEqualPress: true,
    });
    console.log(historyarr);
  };

  clearHist = () => {
    this.setState({
      historyarr: [],
    });
  };

  render() {
    const {
      expression,
      result,
      actualExpression,
      isHistoryVisible,
    } = this.state;

    return (
      <>
        {isHistoryVisible && (
          <View style={styles.historyWrap}>
            <History
              closeHistory={this.closeHistory}
              historyarr={this.state.historyarr}
              clearHist={this.clearHist}
            />
          </View>
        )}
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="darkred" />

          <Screen
            style={styles.screen}
            expression={expression}
            result={result}
          />
          <Button
            style={styles.button}
            getButtonPressedVal={this.getButtonPressedVal}
            allClear={this.allClear}
            del={this.del}
            showHistory={this.showHistory}
            onEqualPress={this.onEqualPress}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  historyWrap: {
    position: 'absolute',
    top: 5,
    zIndex: 3,
    height: '100%',
    width: '100%',
    backgroundColor: '#00000061',
  },
});

export default Calculator;
