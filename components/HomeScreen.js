import React, {useRef, useEffect, useState} from 'react';
import {
  ImageBackground, Animated, View, Image, StyleSheet, 
  Text, Button, TouchableOpacity, Dimensions
} from 'react-native';


function HomeScreen({navigation}){
  const [imgRep, setimgRep] = useState(1);
  const box1x = useRef(new Animated.Value(0)).current;
  const moveOut = () => {
    Animated.timing(box1x, {
      toValue: 2000,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={[styles.container, {opacity: imgRep}]}>
      <Button title="How to Use: App Tutorial" color='darkgrey' onPress={()=> navigation.push('Tutorial')} /> 
      <View style={
        [{flex:0.08},{alignItems: 'center'}, {justifyContent:'flex-end'},
        {marginTop:'15%'}
        ]}>
        <Text style={[
          {fontSize: Dimensions.get('window').width > 350? 32 : 20},
          {color: 'darkgreen', fontFamily:'serif', fontWeight: 'bold'},
        ]}>
          HTP Diagnosis
        </Text>
        <Text style={[
          {fontSize: Dimensions.get('window').width > 350? 26 : 15},
          {color: 'darkred', fontFamily: 'Roboto', fontWeight: 'bold'}
        ]}>                     Aid App</Text>
      </View>
      <ImageBackground
        style={[styles.backImage]}
        source={require('../assets/HTP.png')}
        >
        <Animated.View style = {{
          transform: [{translateX: box1x}],
          width: 300,
          height: 400
        }}>
        <Image
          style={[styles.titleLogo]}
          source={require('../assets/House.png')}
        />
        <Image
          style={[styles.titleLogo, {marginLeft: 40}]}
          source={require('../assets/Tree.png')}
        />
        <Image
          style={[styles.titleLogo, {marginLeft: 60}]}
          source={require('../assets/Person.png')}
        />
        </Animated.View>
      </ImageBackground>
      <View style={[{height: '10%'},{justifyContent:'center'}]}>
        <TouchableOpacity style={
          [{justifyContent:'center'},{alignItems: 'center', height: '100%', backgroundColor:'white'}]
        } onPress= {() => [moveOut,  navigation.push('House')]}>
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
    flex: 1,
    justifyContent: 'center'
  },
  titleLogo: {
    flex: 0.15,
    width: '65%',
    resizeMode: "contain",
    marginLeft: 20,
    opacity: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  titleLogo2: {
    flex: 0.15,
    width: '65%',
    resizeMode: "contain",
    marginLeft: 30,
    opacity: 1
  },
  titleLogo3: {
    flex: 0.15,
    width: '65%',
    resizeMode: "contain",
    marginLeft: 40,
    opacity: 1
  },
  backImage: {
    flex: 0.75,
    marginTop: '25%',
    justifyContent: 'center',
    resizeMode: "contain",
    width: '100%',
    opacity: 1
  },
});

export default HomeScreen;