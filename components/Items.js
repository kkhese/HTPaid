import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Pressable} from 'react-native';

export default function TodoItem({pressHandler, item}){
  return(
    <Pressable onPress={()=>pressHandler(item.key)}>
      <Text style = {styles.item}>{item.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    borderStyle: "dashed",
    borderColor: '#bbb',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  }
});