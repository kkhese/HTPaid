import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, Image, Animated, Dimensions} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const winWidth= 0.95 * (Dimensions.get('window').width);

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
        House
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
        Person
      </Text>
    </View>
  );
};

function Tree({navigation}){
//  const fadecon = useRef(new Animated.Value(0)).current;
//  const fadeIn = () => {
//    Animated.timing(fadecon,{
//      toValue:0.1,
//      duration: 5000
//    }).start();
//  };  
              
  return(
    <View style={[styles.container]}>
      <View style={[styles.container], {flex: 1}}>

      </View>

      <View style={[styles.container], {flex: 2}, {alignItems: 'center'}}>
        <Image source={require('../assets/TreePart1.png')} style={[{height:((221/1443)*winWidth)}, {width: winWidth}]} />
        <Image source={require('../assets/TreePart2.png')} style={[{height:((427/1443)*winWidth)}, {width: winWidth}]} />
        <Image source={require('../assets/TreePart3.png')} style={[{height:((236/1443)*winWidth)}, {width: winWidth}]} />
        <Image source={require('../assets/TreePart4.png')} style={[{height:((238/1443)*winWidth)}, {width: winWidth}]} />
        <Image source={require('../assets/TreePart5.png')} style={[{height:((223/1443)*winWidth)}, {width: winWidth}]} />
        <Image source={require('../assets/TreePart6.png')} style={[{height:((251/1443)*winWidth)}, {width: winWidth}]} />
      </View>
      <View style={[styles.container], {flex: 1}}>

      </View>

      <View style={[styles.container2]}>
        <Swipeable
          renderLeftActions={leftSwipeActions}
          renderRightActions={rightSwipeActions}
          onSwipeableRightOpen={()=>navigation.navigate('Person')}
          onSwipeableLeftOpen={()=>navigation.navigate('House')}
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
    justifyContent: 'center'
  },
  container2: {
    justifyContent: 'flex-end'
  },
});

export default Tree;