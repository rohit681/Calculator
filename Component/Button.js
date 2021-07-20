import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const buttonRippel = {
  color: 'grey',
  borderless: true,
};

class Button extends Component {
  render() {
    const {
      getButtonPressedVal,
      allClear,
      del,
      showHistory,
      onEqualPress,
    } = this.props;
    return (
      <View style={styles.button}>
        <View style={styles.leftSideButtons}>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              allClear();
            }}>
            <Text style={styles.buttonText}>Ac</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              del();
            }}>
            <Text style={styles.buttonText}>Del</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('%');
            }}>
            <Text style={styles.buttonText}>%</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('7');
            }}>
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('8');
            }}>
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('9');
            }}>
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('4');
            }}>
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('5');
            }}>
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('6');
            }}>
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('1');
            }}>
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('2');
            }}>
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('3');
            }}>
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              showHistory();
            }}>
            <Text style={styles.buttonText}>H</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('0');
            }}>
            <Text style={styles.buttonText}>0</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('.');
            }}>
            <Text style={styles.buttonText}>.</Text>
          </Pressable>
        </View>

        <View style={styles.rightSideButtons}>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('÷');
            }}>
            <Text style={styles.rightButtonText}>÷</Text>
          </Pressable>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('×');
            }}>
            <Text style={styles.rightButtonText}>×</Text>
          </Pressable>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('−');
            }}>
            <Text style={styles.rightButtonText}>−</Text>
          </Pressable>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              getButtonPressedVal('+');
            }}>
            <Text style={[styles.rightButtonText]}>+</Text>
          </Pressable>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={buttonRippel}
            onPress={() => {
              onEqualPress()
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                backgroundColor: 'blue',
                padding: 15,
                borderRadius: 40,
                color:'white'
              }}>
              =
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor:'black'
  },
  rightSideButtons: {
    flex: 2,
  },
  leftSideButtons: {
    flex: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  leftSideButton: {
    width: '33.33%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  rightSideButton: {
    height: '20%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButtonText: {
    fontSize: 35,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 40,
    color:'blue'
  },
});

export default Button;
