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
        textStyle={styles.btnTextStyle}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  buttonStyle: {
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: 'blue',
  },
  btnTextStyle: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
