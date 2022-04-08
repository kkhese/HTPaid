import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, Image, Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const leftSwipeActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
    >
      <Text
        style={{
          fontSize: 20,
          color: '#40394a',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        Person
      </Text>
    </View>
  );
};
const rightSwipeActions = () => {
  return (
    <View
      style={{ flex:1, backgroundColor: '#ff8303', justifyContent: 'center' }}
    >
      <Text
        style={{
          fontSize: 20,
          color: '#1b1a17',
          paddingHorizontal: 10,
          paddingVertical: 20,
          textAlign: 'right'
        }}
      >
        Tree
      </Text>
    </View>
  );
};

function House({navigation}){
//  const fadecon = useRef(new Animated.Value(0)).current;
//  const fadeIn = () => {
//    Animated.timing(fadecon,{
//      toValue:0.1,
//      duration: 5000
//    }).start();
//  };  
              
  return(
    <View style={[styles.container]}>
      <View style={[styles.container]}>
        <View style={[styles.container1, {alignItems: 'flex-start'}, {backgroundColor:'#9999ff50'}]}>
          <Image 
              source={require('../assets/HousePart1.png')}
              style={[{marginTop: -20}, {maxWidth: '43%'}, {resizeMode: 'contain'}]} 
          />
          <Image 
              source={require('../assets/HousePart2.png')}
              style={[{marginTop: -21.5}, {maxWidth: '46%'}, {resizeMode: 'contain'}]} 
          />
        </View>
      </View>

      <View style={[styles.container]}>
        <View style={[styles.container1, {alignItems: 'flex-end'}]}>
          <Image 
              source={require('../assets/HousePart3.png')}
              style={[{marginBottom: -50}, {marginLeft: -2},{maxWidth: '22.2%'}, {resizeMode: 'contain'}]} 
          />
          <Image 
              source={require('../assets/HousePart4.png')}
              style={[{marginBottom: -50.5}, {marginLeft: 0}, {maxWidth: '21%'}, {resizeMode: 'contain'}]} 
          />
          <Image 
              source={require('../assets/HousePart5.png')}
              style={[{marginBottom: -49.9}, {maxWidth: '24.1%'}, {resizeMode: 'contain'}]} 
          />
          <Image 
              source={require('../assets/HousePart6.png')}
              style={[{marginBottom: -50.5}, {maxWidth: '21.6%'}, {resizeMode: 'contain'}]} 
          />
        </View>
      </View>
      
      <View style={[styles.container2]}>
        <Swipeable
          renderLeftActions={leftSwipeActions}
          renderRightActions={rightSwipeActions}
          onSwipeableRightOpen={()=>navigation.navigate('Tree')}
          onSwipeableLeftOpen={()=>navigation.navigate('Person')}
        >
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 20,
              backgroundColor: 'white',
            }}
          >
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
              Switch Main Category
            </Text>
          </View>
        </Swipeable>
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
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container2: {
    justifyContent: 'flex-end'
  }
});

export default House;
