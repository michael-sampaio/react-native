import React from "react";
import { Pressable, Image } from "react-native";
import { style } from './componentStyles';

const Product1 = () => {
    return (
        <Pressable style={style.product1} >
            <Image style={style.bannerImage}
                source={require('../../assets/product1.png')}
            />
        </Pressable>
    )
}
  
export default Product1;