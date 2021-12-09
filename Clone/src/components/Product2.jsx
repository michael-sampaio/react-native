import React from "react";
import { Pressable, Image } from "react-native";
import { style } from './componentStyles';

const Product2 = () => {
    return (
        <Pressable style={style.product2} >
            <Image style={style.bannerImage}
                source={require('../../assets/product2.png')}
            />
        </Pressable>
    )
}
  
export default Product2;