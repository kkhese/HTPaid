// Import Components
import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, ScrollView, FlatList, Dimensions, Image} from 'react-native';
import TodoItem from './Items'

// Get window size
const winWidth= 0.9 * (Dimensions.get('window').width);

// Tutorial Page
function Tutorial({navigation}){

  // Contents for 1st step of Tutorial
  const userNote = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'black'}]}>  HTP test is part of Art Therapy, where HTP stands for House, Tree, Person. Since the HTP test is difficult to interpret as a non-verbal test, this app was created so that counselors can effectively diagnose the pictures drawn by the clients. </Text>
        <Text style={[styles.text3, {color: 'black'}]}>  If you are using this app for anything other than analyzing a client's drawings, it's better to skip tutorial and start to explorer the contents of this app. If not, I recommend that you take a look at the tutorial.
        </Text>  
        <Text style={[styles.text3, {color: 'black'}]}>  The tutorial is composed as a todo list, so if you have read the tutorial, <Text style={[styles.text3, {color: 'red'}]}>CLICK THE NUMBERED TITLE</Text> at the top scroll view to delete it, and you will move on to the next step.
        </Text>
        <Text style={[styles.text3, {color: 'black'}]}>  You cannot go one step back but you can <Text style={[styles.text3, {color: 'red'}]}>RESET </Text><Text style={[styles.text3, {color: 'black'}]}>the tutorial by </Text><Text style={[styles.text3, {color: 'red'}]}>CLICKING BOTTOM RESET BUTTON</Text>
        </Text>
        <Text style={[styles.text3, {color: 'black'}]}>  This is a quick tutorial. If you need to know the details of this app, please read README file.</Text>
      </View>
    );
  }
  // Contents for 2nd step of Tutorial
  const preCon = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'black'}]}>  Since you will probably use this app while looking at the client's drawings, you will need to obtain the drawings drawn by the client through a prior meeting with the client.</Text>
        <Text style={[styles.text3, {color: 'orange'}]}>  The below items are not included.</Text>
        <Text style={[styles.text3, {fontSize: 14}, {color: 'purple'}]}>   * The HTP test procedure</Text>
        <Text style={[styles.text3, {fontSize: 14}, {color: 'purple'}]}>   * Interpretation according to the order of drawing</Text>
        <Text style={[styles.text3, {fontSize: 14}, {color: 'purple'}]}>   * Analysis by gender in the human figure</Text>
        <Text style={[styles.text3, {color: 'black'}]}>  Listed items will be supported in the updated version.</Text>
      </View>
    );
  }
  // Contents for 3rd step of Tutorial
  const mainCat = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'black'}]}>  There are <Text style={[styles.text3, {color: 'red'}]}>Three </Text>main cetegory, which is House, Tree, Person.</Text>
        <Text style={[styles.text3, {color: 'black'}]}>  You can switch among main categories by <Text style={[styles.text3, {color: 'red'}]}>swiping </Text>the bottom sliding window. See below image</Text>
        <Image source={require('../assets/Tut01.png')} style={[{height:((1521/1899)*winWidth)}, {width: winWidth}]} />
      </View>
    );
  }  
  // Contents for 4th step of Tutorial
  const mainSub = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text>  5Hello World! My name is {4+2}! </Text>
      </View>
    );
  }  

  const subDetail = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text>  H6ello World! My name is{4+2}! </Text>
      </View>
    );
  }  

  const detailWin = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text>  He1234llo World! My nameor {4+2}! </Text>
      </View> 
    );
  }  

  const postCon = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text> 1234 Hello World! My namer {4+2}! </Text>
      </View>
    );
  }

  const forEx = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text> Last Attempt Hello World!r {4+2}! </Text>
      </View>
    );
  }  

  const endTut = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text> Cogratulations! </Text>
      <Text>  You have completed the tutorial! </Text>
      </View>
    );
  }

  // State setup for the contents of Tutorial
  const [step1, setStep1] = useState(userNote)
  const [step2, setStep2] = useState(preCon)
  const [step3, setStep3] = useState(mainCat)
  const [step4, setStep4] = useState(mainSub)
  const [step5, setStep5] = useState(subDetail)
  const [step6, setStep6] = useState(detailWin)
  const [step7, setStep7] = useState(postCon)
  const [step8, setStep8] = useState(forEx)
  const [step9, setStep9] = useState(endTut)

    // State for todo
  const [todo, settodo] = useState([
    { text: '1. Notificatino for User <= click to clear', key: '01'},
    { text: '2. Precondition <= click to clear', key: '02'},
    { text: '3. Main Category <= click to clear', key: '03'},
    { text: '4. Main to Sub-category <= click to clear', key: '04'},
    { text: '5. Sub-category to Detail <= click to clear', key: '05'},
    { text: '6. Detail Window <= click to clear', key: '06'},
    { text: '7. Postcondition <= click to clear', key: '07'},
    { text: '8. For Example <= click to clear', key: '08'},
  ]);

  const pressHandler = (key) => {
    settodo( prevtodo => {
      return prevtodo.filter(todo => todo.key != key);
    })
    if (key==1)
      setStep1(step2)
    else if (key==2)
      setStep1(step3)
    else if (key==3)
      setStep1(step4)
    else if (key==4)
      setStep1(step5)
    else if (key==5)
      setStep1(step6)
    else if (key==5)
      setStep1(step7)
    else if (key==7)
      setStep1(step8)
    else if (key==8)
      setStep1(step9)
  }

  const renderSeparator =() => (
    <View style={{backgroundColor:'purple', height: '2%', width: '100%' }}/>
  );

  return(
    <View style={[styles.container]}>
      <View style={[styles.container2]}>
        <ImageBackground 
            source={require('../assets/Tutorial.jpg')} 
            style={[styles.image, {padding: 10},]}>
            <Text style={[styles.text, {color: 'white'}]}> Turorial for App User </Text>
            <Text style={[styles.text2, {color: 'purple'}]}> H
            <Text style={[styles.text2, {color: 'black'}, {fontSize: 12}]}>(house) 
            <Text style={[styles.text2, {color: 'purple'}]}> T
            <Text style={[styles.text2, {color: 'black'}, {fontSize: 12}]}>(tree) 
            <Text style={[styles.text2, {color: 'purple'}]}> P
            <Text style={[styles.text2, {color: 'black'}, {fontSize: 12}]}>(person)
            </Text></Text></Text></Text></Text></Text>
          <ScrollView >  
            <View style={[{justifyContent: 'center'}]}>
              <FlatList 
                data={todo}
                renderItem={( {item} )=>(
                  <TodoItem item={item} pressHandler={pressHandler}/>
                )}
                ItemSeparatorComponent={renderSeparator}            
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
      <View style={[styles.container2,{marginTop:50}, {flex:2.5}]}>
        <ScrollView style={[styles.text2]}>
          {step1}
        </ScrollView>
      </View>
      <View style={[{justifyContent: 'flex-end'}]}>
        <Button title="Reset Tutorial" color='darkgrey' onPress={()=> navigation.replace('Tutorial')} /> 
      </View>
    </View>
  );
}



export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  container2: {
    flex:1
  },
  image: {
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
    marginTop: 10
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: '#ffffff70'
  },
  text3: {
    fontSize: 20,
    textAlign: 'justify',
    marginBottom: 7,
    marginTop: 7,
    backgroundColor: 'white'
  },
});
