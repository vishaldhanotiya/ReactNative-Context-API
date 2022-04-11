import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import Button from '../useCallback/Button';
import {navigate} from '../../navigation/RootNavigation';

export default function Home() {
  const navigateToScreen = screenName => {
    switch (screenName) {
      case 'Counter':
        navigate('Counter');
        break;
      case 'UseReducer':
        navigate('UseReducer');
        break;
      default:
        navigate('Counter');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Button
        text={'Use Callback Example'}
        onClick={() => {
          navigateToScreen('Counter');
        }}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.btnTextStyle}
      />
      <Button
        text={'Use Reducer Example'}
        onClick={() => {
          navigateToScreen('UseReducer');
        }}
        textStyle={styles.btnTextStyle}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  buttonStyle: {
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: 'blue',
  },
  btnTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
