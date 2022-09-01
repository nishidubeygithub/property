import React from "react";
import {View, Text , StyleSheet, TextInput} from "react-native";

const TextInputComponent = (props) => {
    return(
    <View>
        <TextInput style={props.style}
        placeholder={props.placeholder}
        maxLength ={props.maxLength}
        editable ={props.editable}
      />
    </View>
    )
}

const styles = StyleSheet.create({

})

export default TextInputComponent;