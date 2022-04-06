import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, ScrollView, Animated, Dimensions} from 'react-native';

function Tutorial({navigation}){
  const fadecon = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadecon,{
      toValue:0.1,
      duration: 5000
    }).start();
  };
  return(
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/Tutorial.jpg')} style={styles.image}>
          <Text style={[styles.text, {color: 'orange'}]}> Main Categories: </Text>
          <Text style={[styles.text, {color: 'purple'}]}> House </Text>
          <Text style={[styles.text, {color: 'purple'}]}> Tree </Text>
          <Text style={[styles.text, {color: 'purple'}]}> Person </Text>
        </ImageBackground>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00000070',
  },
});

export default Tutorial;

//      <Animated.ImageBackground 
//        source={require('../assets/Tutorial.jpg')} 
//        style = {[{opacity:fadeAnim}]}
//        onLoad ={fadeIn}>
//        <Text>
//          explain
//        </Text>
//      </Animated.ImageBackground>
