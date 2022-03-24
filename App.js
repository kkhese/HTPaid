import React, {useRef, useEffect} from 'react';
import {
  ImageBackground, Animated, View, Image, StyleSheet, Text, Button, TouchableOpacity, Dimensions
} from 'react-native';

const App = () => {
  const action = () => {

  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.backImage]}
        source={require('./assets/HTP.png')}
        >
        <Image
          style={[styles.titleLogo]}
          source={require('./assets/House.png')}
        />
        <Image
          style={[styles.titleLogo, {marginLeft: 40}]}
          source={require('./assets/Tree.png')}
        />
        <Image
          style={[styles.titleLogo, {marginLeft: 50}]}
          source={require('./assets/Person.png')}
        />
      </ImageBackground>
      <View style={[{height: '10%'}]}>
        <TouchableOpacity style={
          [{justifyContent:'center'},{alignItems: 'center', height: '80%', backgroundColor:'yellow'}]
        }>
          <Text style={[{justifyContent:'center'},{color: 'orange'}, 
                        {fontSize: Dimensions.get('window').width > 350? 25 : 15},
                        {fontWeight: "bold"}]}>Click To Start
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
export default App;