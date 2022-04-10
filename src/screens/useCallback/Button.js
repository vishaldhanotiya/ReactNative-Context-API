import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {memo} from 'react';

const Button = ({text, onClick, textStyle, buttonStyle}) => {
  console.log('Check for rendering');
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonStyle, buttonStyle]}
        onPress={onClick}>
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  textStyle: {
    padding: 10,
    margin: 5,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
});

export default memo(Button);
