import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function AddItem({submitHandler}) {
  const [input, setInput] = useState('');

  function changeHandler(text) {
    setInput(text);
  }

  function onPress() {
    if (input.length !== 0) {
      return submitHandler(input);
    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeHolder="..."
        onChangeText={changeHandler}
      />
      <Button onPress={onPress} title="Add to List" color="teal" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
