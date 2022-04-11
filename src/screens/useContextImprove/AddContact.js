import React, {useReducer, useContext} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import Button from '../useCallback/Button';
import {Color} from '../../common/Color';
import {Strings} from '../../common/Strings';
import {Context} from '../../context/ContactContext';

const initialState = {name: '', number: ''};

function reducer(state, action) {
  switch (action.type) {
    case 'NAME':
      return {...state, name: action.name};
    case 'NUMBER':
      return {...state, number: action.number};
    case 'RESET':
      return initialState;
  }
}

export default function AddContact() {
  const [states, dispatch] = useReducer(reducer, initialState);
  const {name, number} = states;

  const {data: state, addContact} = useContext(Context);
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={'Name'}
          placeholderTextColor="#003f5c"
          value={name}
          onChangeText={name => dispatch({name, type: 'NAME'})}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={'Number'}
          value={number}
          placeholderTextColor="#003f5c"
          onChangeText={number => dispatch({number, type: 'NUMBER'})}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'RESET'});
        }}>
        <Text style={styles.forgotBtn}>{Strings.forgotPassword}</Text>
      </TouchableOpacity>

      <Button
        onClick={() => {
          addContact(name, number);
        }}
        text={'Add Contact'}
        buttonStyle={styles.loginBtn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: '10%',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: Color.lightPink,
    borderRadius: 25,
    height: 50,
    paddingStart: 20,
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    padding: 10,
  },

  forgotBtn: {
    height: 30,
    textAlign: 'center',
  },

  loginBtn: {
    borderRadius: 25,
    marginTop: 15,
    backgroundColor: Color.darkPink,
  },
});
