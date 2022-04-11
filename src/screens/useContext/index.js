import {View, FlatList, StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';
import BlogContext from '../../context';
import Button from '../useCallback/Button';

export default function UseContext() {
  const {data, addBlog} = useContext(BlogContext);

  const renderBlogItem = ({index, item}) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <View style={styles.mainContainer}>
      <Button
        text={'Add Blog'}
        onClick={addBlog}
        textStyle={styles.btnTextStyle}
        buttonStyle={styles.buttonStyle}
      />
      <Text style={styles.btnTextStyle}>{'Number of Count:-'}</Text>
      <FlatList data={data} renderItem={renderBlogItem} />
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
