import React, {useRef, useEffect, useState} from 'react';
import {
  ImageBackground, Animated, View, Image, StyleSheet, 
  Text, Button, TouchableOpacity, Dimensions
} from 'react-native';


function HomeScreen({navigation}){
  const [imgRep, setimgRep] = useState(1);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const box1x = useRef(new Animated.Value(0)).current;
  const box2x = useRef(new Animated.Value(0)).current;

  const moveOut = () => {
    Animated.timing(box1x, {
      toValue: 1000,
      duration: 1500,
//      useNativeDriver: true
    }).start()
    Animated.timing(box2x, {
      toValue: -2000,
      duration: 1200,
//      useNativeDriver: true
    }).start()
  }
  const fadeIn = () => {
    Animated.timing(fadeAnim,{
      toValue:1,
      duration: 1500
    }).start();
  };

  const runDelay=()=>{
    setTimeout(()=>{navigation.push('Tree')},1000)
  };

  return (
    <View style={[styles.container, {opacity: imgRep}]}>
      <Button title="How to Use: App Tutorial" color='darkgrey' onPress={()=> navigation.push('Tutorial')} /> 
      <View style={
        [{flex:0.08},{alignItems: 'center'}, {justifyContent:'flex-end'},
        {marginTop:'15%'}
        ]}>
        <Text style={[
          {fontSize: Dimensions.get('window').width > 350? 30 : 20},
          {color: 'darkgreen', fontFamily:'serif', fontWeight: 'bold'},
        ]}>
          HTP Diagnosis Aid
        </Text>
        <Text style={[
          {fontSize: Dimensions.get('window').width > 350? 26 : 15},
          {color: 'darkred', fontFamily: 'Roboto', fontWeight: 'bold'}
        ]}>                     App ver. Beta</Text>
      </View>
      <ImageBackground onLoad={fadeIn}
        style={[styles.backImage]}
        source={require('../assets/HTP.png')}
        >
        <Animated.View style = {{
          transform: [{translateX: box1x}],
          width: 300,
          height: 400
        }}>
        <Animated.Image
          style={[styles.titleLogo, {opacity:fadeAnim}, {transform: [{translateX: box1x}],}]}
          source={require('../assets/House.png')}
        />
        <Animated.Image
          style={[styles.titleLogo, {opacity:fadeAnim}, {transform: [{translateX: box2x}]}, {marginLeft: 40}]}
          source={require('../assets/Tree.png')}
        />
        <Animated.Image
          style={[styles.titleLogo, {opacity:fadeAnim}, {marginLeft: 60}]}
          source={require('../assets/Person.png')}
        />
        </Animated.View>
      </ImageBackground>
      <View style={[{height: '10%'},{justifyContent:'center'}]}>
        <TouchableOpacity 
          style={[{justifyContent:'center'},{alignItems: 'center', height: '100%', backgroundColor:'white'}]} 
          onPress= {()=> [moveOut(), runDelay()]}>
          <Text style={[{justifyContent:'center'},{color: 'orange'}, 
                        {fontSize: Dimensions.get('window').width > 350? 25 : 15},
                        {fontWeight: "bold"}]}>Continue to Use HTP App
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
    flex: 1,
    justifyContent: 'center'
  },
  titleLogo: {
    flex: 0.15,
    width: '65%',
    resizeMode: "contain",
    marginLeft: 20,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backImage: {
    flex: 1,
    marginTop: '15%',
    justifyContent: 'center',
    resizeMode: "contain",
    maxWidth: '100%',
    opacity: 1
  },
});

export default HomeScreen;