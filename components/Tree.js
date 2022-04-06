import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, Image, Animated} from 'react-native';

function House({navigation}){
//  const fadecon = useRef(new Animated.Value(0)).current;
//  const fadeIn = () => {
//    Animated.timing(fadecon,{
//      toValue:0.1,
//      duration: 5000
//    }).start();
//  };
//              
  return(
    <View style={[styles.container]}>

      <View style={[styles.container]}>
        <View style={[styles.container2, {alignItems: 'flex-start'}, {backgroundColor:'#9999ff50'}]}>
          <Image 
              source={require('../assets/HousePart1.png')}
              style={[{marginTop: 0}, {maxWidth: '43.5%'}, {resizeMode: 'contain'}]} 
          />
          <Image 
              source={require('../assets/HousePart2.png')}
              style={[{marginRight: 0}, {maxWidth: '45%'}, {resizeMode: 'contain'}]} 
          />
        </View>
      </View>

      <View style={[styles.container]}>
        <View style={[styles.container2, {alignItems: 'flex-end'}, {backgroundColor:'#FF8844f0'}]}>
          <Image 
              source={require('../assets/HousePart3.png')}
              style={[{marginBottom: 8}, {marginLeft: 2},{maxWidth: '22%'}, {resizeMode: 'contain'}]} 
          />
          <Image 
              source={require('../assets/HousePart4.png')}
              style={[{marginBottom: 8}, {marginLeft: 0}, {maxWidth: '20.9%'}, {resizeMode: 'contain'}]} 
          />
          <Image 
              source={require('../assets/HousePart5.png')}
              style={[{marginBottom: 9}, {maxWidth: '24%'}, {resizeMode: 'contain'}]} 
          />
          <Image 
              source={require('../assets/HousePart6.png')}
              style={[{marginBottom: 9}, {maxWidth: '21.6%'}, {resizeMode: 'contain'}]} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: 'row'
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

export default House;
