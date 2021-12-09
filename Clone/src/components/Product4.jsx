import React from "react";
import { Pressable, Image } from "react-native";
import { style } from './componentStyles';

const Product4 = () => {
    return (
        <Pressable style={style.product4} >
            <Image style={style.bannerImage}
                source={require('../../assets/product4.png')}
            />
        </Pressable>
    )
}
  
export default Product4;