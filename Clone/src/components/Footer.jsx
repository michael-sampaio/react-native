import React from "react";
import { Pressable, View } from "react-native";
import { style } from './componentStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Footer = () => {
    return (
        <View style={style.footer}>
            <Pressable>
            <Entypo name="home" size={31} color="white" />
            </Pressable>
            <Pressable>
            <FontAwesome5 name="user-alt" size={27} color="white" />
            </Pressable>
            <Pressable>
            <FontAwesome5 name="shopping-cart" size={27} color="white" />
            </Pressable>
        </View>
    )
}

export default Footer;