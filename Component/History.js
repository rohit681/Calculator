import React, { Component } from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
const buttonRippel = {
  color: 'black',
  borderless: true,
};
class History extends Component {
  render() {
    const { closeHistory, historyarr, clearHist } = this.props;
    return (
      <View style={styles.history}>
        <View style={styles.historyContainer}>
          <View style={styles.header}>
            <Text style={styles.historyTxt}>History</Text>
            <Pressable style={styles.clearBtn} android_ripple={buttonRippel} onPress={() => {
                clearHist();
              }}>
              <Text style={styles.clearTxt}>Clear</Text>
            </Pressable>
          </View>
          <View style={styles.historyContent}>
            <ScrollView style={{ flex: 1 }}>
              {historyarr.map((item) => {
                return (
                  <View style={styles.historyItem}>
                    <Text style={styles.historyExpression}>
                      {item.expression}
                    </Text>
                    <Text style={styles.historyResult}>= {item.result}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.close}>
            <Pressable android_ripple={buttonRippel}
              onPress={() => {
                closeHistory();
              }}>
              <Text style={styles.closeTxt}>Close</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.disabledArea}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  history: { flex: 1, paddingTop: Constants.statusBarHeight },
  historyContainer: {
    backgroundColor: '#606060',
    flex: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  disabledArea: {
    flex: 2,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  close: {
    flex: 1,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  historyContent: {
    flex: 8,
  },
  historyTxt: {
    textAlign: 'left',
    margin: 3,
    color: 'white',
    fontSize: 28,
  },
  clearTxt: {
    width: '65%',
    color: 'white',
    fontSize: 20,
    textAlign: 'right',
    margin: 15,
  },
  clearBtn: {
    width: '90%',
  },
  closeTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic',
  },
  historyItem: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    padding: 8,

    marginHorizontal: '5%',
  },
  historyExpression: {
    color: 'white',
    fontSize: 17,
    textAlign: 'right',
    margin: 3,
  },
  historyResult: {
    color: 'white',
    fontSize: 22,
    textAlign: 'right',
    margin: 4,
  },
});
export default History;
