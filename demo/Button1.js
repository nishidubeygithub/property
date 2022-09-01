import React from "react";
import {View, Text , StyleSheet, Button} from "react-native";

const Button1 = (props) => {
    return(
    <View style={styles.button}>
        <Button title = "Click" style={props.style} color ={props.color}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    button:{
        height:100,
        width:80
         },
})

export default Button1;