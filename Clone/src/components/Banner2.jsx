import React from "react";
import { Image, Pressable } from "react-native";
import { style } from './componentStyles';

const Banner2 = () => {
    return (
        <Pressable style={style.banner2} >
            <Image style={style.bannerImage}
                source={require('../../assets/gift.png')}
            />
        </Pressable>
    )
}

export default Banner2;