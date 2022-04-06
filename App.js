import React, {useRef, useEffect, useState} from 'react';
import { Animated, View, Image, StyleSheet, Text, Button, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Tutorial from './components/Tutorial';
import House from './components/House';
import Tree from './components/Tree';
import Person from './components/Person';

const Stack = createNativeStackNavigator();

//function DetailsScreen({navigation}){
//  return
//}
  //       <Stack.Screen name="MoreDetails" component = {DetailsScreen2} />

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component = {HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Tutorial" component = {Tutorial} />
        <Stack.Screen name="House" component = {House} />
        <Stack.Screen name="Tree" component = {Tree} />
        <Stack.Screen name="Person" component = {Person} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;