import React from "react";
import { Pressable, Image } from "react-native";
import { style } from './componentStyles';

const Merchandising2 = () => {
    return (
        <Pressable style={style.merchan2} >
            <Image style={style.bannerImage}
                source={require('../../assets/merchandising2.png')}
            />
        </Pressable>
    )
}
  
export default Merchandising2;