import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, Image, Animated, Dimensions} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const winWidth= 0.80 * (Dimensions.get('window').width);

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
        Tree
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
        House
      </Text>
    </View>
  );
};

function Person({navigation}){
//  const fadecon = useRef(new Animated.Value(0)).current;
//  const fadeIn = () => {
//    Animated.timing(fadecon,{
//      toValue:0.1,
//      duration: 5000
//    }).start();
//  };  
              
  return(
    <View style={[styles.container]}>
      <View style={[styles.container], {alignItems: 'center'}, {flex: 1}}>
      </View>

      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <Image source={require('../assets/PersonPart1.png')} style={[{height:((275/1257)*winWidth)}, {width: winWidth}]} />
        <Image source={require('../assets/PersonPart2.png')} style={[{height:((350/1256)*winWidth)}, {width: winWidth}]} />
      </View>
      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/PersonPart3.png')} 
            style={[{height:((677/1257)*winWidth)}, {width: (499/1257)*winWidth}]} />
          <Image source={require('../assets/PersonPart4.png')} 
            style={[{height:((677/1257)*winWidth)}, {width: (758/1257)*winWidth}]} />
        </View>
      </View>
      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <Image source={require('../assets/PersonPart5.png')} style={[{height:((396/1257)*winWidth)}, {width: winWidth}]} />
        <Image source={require('../assets/PersonPart6.png')} style={[{height:((361/1257)*winWidth)}, {width: winWidth}]} />
      </View>

      <View style={[styles.container], {flex: 1}}>
      </View>

      <View style={[styles.container2]}>
        <Swipeable
          renderLeftActions={leftSwipeActions}
          renderRightActions={rightSwipeActions}
          onSwipeableRightOpen={()=>navigation.navigate('House')}
          onSwipeableLeftOpen={()=>navigation.navigate('Tree')}
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
  }
});

export default Person;