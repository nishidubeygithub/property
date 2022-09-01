import React from "react";
import {View, Text , StyleSheet} from "react-native";

const TextHeading = (props) => {
    return(
    <View>
        <Text style={props.style}>{props.title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({

})

export default TextHeading;