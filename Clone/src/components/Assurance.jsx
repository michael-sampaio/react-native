import React from "react";
import { Image, Pressable } from "react-native";
import { style } from './componentStyles';

const Assurance = () => {
    return (
        <Pressable style={style.assurance} >
            <Image style={style.bannerImage}
                source={require('../../assets/assurance.png')}
            />
        </Pressable>
    )
}

export default Assurance;