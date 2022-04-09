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
    borderColor: '#fa0',
    borderRadius: 2,
    padding: 8,
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#ffffffb0'
  }
});