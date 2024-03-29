import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, Image, Animated, Dimensions, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const winWidth= 0.90 * (Dimensions.get('window').width);

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
      <View style={[styles.container], {alignItems: 'center'}, {flex: 1}}>
      </View>

      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('House-Chimney')}> 
          <Image source={require('../assets/HousePart1.png')} 
            style={[{height:((752/1296)*winWidth)}, {width: (616/1296)*winWidth}]} />
          </TouchableOpacity>
          <Image source={require('../assets/HousePart2.png')} 
            style={[{height:((752/1296)*winWidth)}, {width: (680/1296)*winWidth}]} />
        </View>
      </View>
      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('House-Stair')}> 
          <Image source={require('../assets/HousePart3.png')} 
            style={[{height:((669/1296)*winWidth)}, {width: (325/1296)*winWidth}]} />
          </TouchableOpacity>
          <Image source={require('../assets/HousePart4.png')} 
            style={[{height:((669/1296)*winWidth)}, {width: (304/1296)*winWidth}]} />
          <Image source={require('../assets/HousePart5.png')} 
            style={[{height:((669/1296)*winWidth)}, {width: (353/1296)*winWidth}]} />
          <TouchableOpacity onPress={()=> navigation.navigate('House-Wall')}> 
          <Image source={require('../assets/HousePart6.png')} 
            style={[{height:((669/1296)*winWidth)}, {width: (316/1296)*winWidth}]} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.container], {flex: 1}}>
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
    justifyContent: 'center'
  },
  container2: {
    justifyContent: 'flex-end'
  }
});

export default House;
