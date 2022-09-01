import React from "react";
import {View, Text , StyleSheet, TextInput, Text, Button, Image} from "react-native";
import TextHeading from './TextHeading'
import TextInputComponent from './TextInputComponent'
const Main = (props) => {
    return(
    <View>
        <TextHeading style={props.style}>{props.title}</Text>
        <TextInputComponent style={props.style}
        placeholder={props.placeholder}
        maxLength ={props.maxLength}
        editable ={props.editable}/>
        
      
      
    </View>
    )
}

const styles = StyleSheet.create({

})

export default Main;