import React from "react";
import { Pressable, Image } from "react-native";
import { style } from './componentStyles';

const Merchandising1 = () => {
    return (
        <Pressable style={style.merchan1} >
            <Image style={style.bannerImage}
                source={require('../../assets/merchandising1.png')}
            />
        </Pressable>
    )
}
  
export default Merchandising1;