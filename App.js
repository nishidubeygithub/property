import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Images from './demo/Images'
import TextHeading from "./demo/TextHeading";
import TextInputComponent from "./demo/TextInputComponent"
import Button1 from "./demo/Button1";
// import Main from "./demo/Main"

const App = () => {
    return (
        <SafeAreaView>
          <TextHeading title = "Nishi" style ={styles.text}/>
          <TextHeading title = "Nimish" style ={styles.textsize}/>
          <TextInputComponent placeholder = "Name"
          style={styles.placeholder}
          maxLength = {20}
          editable ={true}/>
          <TextInputComponent placeholder = "Email"
          style={styles.placeholder}
          maxLength = {20}
          editable ={true}/>
          <Images name = {require('./Assets/sunset-png-1.webp')}
          style={styles.image}/>
          <Images name = {require('./Assets/google-logo.png')}
         style={styles.imageStyle}/>
         <Button1 title = "Click" color='black'/>
         <Button1 title = "Submit" color="green"/>
        </SafeAreaView>
    )}

const styles = StyleSheet.create({
    text:{
      fontSize:15,
    },
    textsize:{
    color:'blue'
    },
    placeholder:{
      borderWidth:1,
      height:30,
      width:100,
      padding:10,
      margin:10
    },
    image:{
      height:50,
      width:100,
      marginLeft:20
    },
    imageStyle:{
      height:50,
      width:50,
      marginLeft:20
    }
})
export default App;