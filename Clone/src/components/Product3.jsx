import React from "react";
import { Pressable, Image } from "react-native";
import { style } from './componentStyles';

const Product3 = () => {
    return (
        <Pressable style={style.product3} >
            <Image style={style.bannerImage}
                source={require('../../assets/product3.png')}
            />
        </Pressable>
    )
}
  
export default Product3;