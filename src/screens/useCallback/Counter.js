import {View, StyleSheet, Text} from 'react-native';
import React, {useState, useCallback} from 'react';
import Button from './Button';

export default function Counter() {
  //State Declare
  const [count, setCount] = useState(0);

  // functions which are wrapped by useCallback for optimize re-rendering
  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(count => count - 1);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Button
        text={'+'}
        onClick={increment}
        textStyle={styles.btnTextStyle}
        buttonStyle={styles.buttonStyle}
      />
      <Text style={styles.btnTextStyle}>{'Number of Count:-' + count}</Text>
      <Button
        text={'-'}
        onClick={decrement}
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
