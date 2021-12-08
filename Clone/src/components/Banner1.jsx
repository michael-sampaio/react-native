import React from "react";
import { Pressable, Image } from "react-native";
import { style } from './componentStyles';

const Banner1 = () => {
    return (
        <Pressable style={style.banner1} >
            <Image style={style.bannerImage}
                source={require('../../assets/shipping.png')}
            />
        </Pressable>
    )
}
  
export default Banner1;