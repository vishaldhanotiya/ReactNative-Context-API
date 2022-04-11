import React, {useReducer} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import Button from './Button';
import {Color} from '../common/Color';
import {Strings} from '../common/Strings';
const initialState = {email: '', password: ''};

function reducer(state, action) {
  console.log('Reducer ==', action);
  switch (action.type) {
    case 'EMAIL':
      return {...state, email: action.email};

    case 'PASSWORD':
      return {...state, password: action.password};
    case 'RESET':
      return initialState;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {email, password} = state;
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={Strings.email}
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={email => dispatch({email, type: 'EMAIL'})}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={Strings.password}
          secureTextEntry={true}
          value={password}
          placeholderTextColor="#003f5c"
          onChangeText={password => dispatch({password, type: 'PASSWORD'})}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'RESET'});
        }}>
        <Text style={styles.forgotBtn}>{Strings.forgotPassword}</Text>
      </TouchableOpacity>

      <Button text={Strings.login} buttonStyle={styles.loginBtn} />
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
