import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Screen extends Component {
  render() {
    const { expression, result } = this.props;
    return (
      <View style={styles.screen}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 3,
    backgroundColor: 'black',
    borderBottomColor:'lightgrey',
    borderBottomWidth:2.5
  },
  expression: {
    fontSize: 30,
    color: 'white',
    padding: 10,
    textAlign: 'right',
  },
  result: {
    textAlign: 'right',
    fontSize: 24,
    padding: 10,
    color: 'white',
  },
});

export default Screen;
