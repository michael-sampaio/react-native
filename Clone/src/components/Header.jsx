import React from "react";
import { Image, Pressable } from "react-native";
import { style } from './componentStyles';

const Header = () => {
    return (
        <Pressable style={style.header}>
            <Image style={style.symbol}
                source={require('../../assets/header.png')}
            />
        </Pressable>
    )
}

export default Header;