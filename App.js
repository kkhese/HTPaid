import React, {useRef, useEffect, useState} from 'react';
import { Animated, View, Image, StyleSheet, Text, Button, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import Tutorial from './components/Tutorial';
import House from './components/House';
import Tree from './components/Tree';
import Person from './components/Person';
import HouseChimney from './components/House/Chimney'
import HouseDoor from './components/House/Door'
import HouseRoof from './components/House/Roof'
import HouseStair from './components/House/Stair'
import HouseWall from './components/House/Wall'
import HouseWindow from './components/House/Window'

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component = {HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Tutorial" component = {Tutorial} />
        <Stack.Screen name="House" component = {House} />
        <Stack.Screen name="House-Chimney" component = {HouseChimney} />
        <Stack.Screen name="House-Door" component = {HouseDoor} />
        <Stack.Screen name="House-Roof" component = {HouseRoof} />
        <Stack.Screen name="House-Stair" component = {HouseStair} />
        <Stack.Screen name="House-Wall" component = {HouseWall} />
        <Stack.Screen name="House-Window" component = {HouseWindow} />
        <Stack.Screen name="Tree" component = {Tree} />
        <Stack.Screen name="Person" component = {Person} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;