import React from "react";
import { Pressable, Image } from "react-native";
import { style } from './componentStyles';

const Product5 = () => {
    return (
        <Pressable style={style.product5} >
            <Image style={style.bannerImage}
                source={require('../../assets/product5.png')}
            />
        </Pressable>
    )
}
  
export default Product5;