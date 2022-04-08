import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, ScrollView, FlatList, Dimensions} from 'react-native';
import TodoItem from './Items'

const winHeight= 0.15 * (Dimensions.get('window').height);
const tut3 = 'This is just test Purpose'

const Hello = () => {
  const name = 2+2;
  return(
//    <ScrollView>
    <View>
      <Text>  Hello World! My name is {name} or {4+2}! </Text>
    
    </View>
//    </ScrollView>
    );
}

function Tutorial({navigation}){
  const [step1, setStep1] = useState('Copying')
  const [step2, setStep2] = useState(Hello)
  const [step3, setStep3] = useState(tut3)
  // State for todo
  //const [step, setStep] = useState([
  //  { text: 'kill', key: '01'},
  //  { text: 'killing egg', key: '02'},
  //  { text: 'antivirus egg', key: '03'},
  //  { text: 'zombie eggie', key: '04'},
  //  { text: 'finally chicken', key: '05'},
  //]);

  // State for todo
  const [todo, settodo] = useState([
    { text: 'kill', key: '01'},
    { text: 'killing egg', key: '02'},
    { text: 'antivirus egg', key: '03'},
    { text: 'zombie eggie', key: '04'},
    { text: 'finally chicken', key: '05'},
  ]);

  const pressHandler = (key) => {
    settodo( prevtodo => {
      return prevtodo.filter(todo => todo.key != key);
    })
    if (key==1)
    {
      setStep1(step2)
    }
    else if (key==2)
      setStep1(step3)

  }

  const renderSeparator =() => (
    <View
      style={{
        backgroundColor:'black',
        height: '1%',
        width: '100%'
      }}
    />
  );

  return(
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/Tutorial.jpg')} style={[styles.image, {padding: 10}]}>
          <Text style={[styles.text, {color: 'white'}]}> Turorial for App User </Text>
          <Text style={[styles.text2, {color: 'purple'}]}> H
          <Text style={[styles.text2, {color: 'black'}, {fontSize: 12}]}>(house) 
          <Text style={[styles.text2, {color: 'purple'}]}> T
          <Text style={[styles.text2, {color: 'black'}, {fontSize: 12}]}>(tree) 
          <Text style={[styles.text2, {color: 'purple'}]}> P
          <Text style={[styles.text2, {color: 'black'}, {fontSize: 12}]}>(person)
          </Text></Text></Text></Text></Text></Text>
        </ImageBackground>
        <ScrollView style = {[styles.list, {height:winHeight}]}>
          <FlatList
            data={todo}
            renderItem={( {item} )=>(
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
            ItemSeparatorComponent={renderSeparator}            
          />
        </ScrollView>
        <View>
          <Text style={[styles.text2]}>
            {step1}
          </Text>
        </View>
      </View>
      <Button title="Reset Tutorial" color='darkgrey' onPress={()=> navigation.replace('Tutorial')} /> 
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
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#00000070',
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5
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
