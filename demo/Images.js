import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const Images = (props) => {
    return (
        <View>
            <Image style ={props.style} source ={props.name}/>
        </View>
    )
}
const styles = StyleSheet.create ({

})
export default Images;