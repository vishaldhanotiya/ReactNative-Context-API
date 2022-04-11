import {View, FlatList, StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';
import Button from '../useCallback/Button';
import {navigate} from '../../navigation/RootNavigation';
import {Context} from '../../context/ContactContext';

export default function UseContextImprove() {
  const {state, deleteContact} = useContext(Context);

  const renderBlogItem = ({index, item}) => {
    return (
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.nameText}>{'Name:- ' + item.name}</Text>
          <Text style={styles.nameText}>{'Mobile Number:-' + item.id}</Text>
        </View>
        <View>
          <Button
            text={'Delete'}
            onClick={() => {
              deleteContact(item.id);
            }}
            textStyle={styles.btnTextStyle}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Button
        text={'Add Contact'}
        onClick={() => {
          navigate('AddContact');
        }}
        textStyle={styles.btnTextStyle}
        buttonStyle={styles.buttonStyle}
      />
      <Text style={styles.btnTextStyle}>{'Number of Contact:-'}</Text>
      <FlatList
        keyExtractor={item => {
          item.id.toString();
        }}
        data={state}
        renderItem={renderBlogItem}
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
    marginVertical: 15,
    backgroundColor: 'blue',
  },
  btnTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {color: 'black'},
});
