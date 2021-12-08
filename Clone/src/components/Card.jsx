import React from 'react';
import { Text, Pressable } from 'react-native';
import { style } from './componentStyles';

const Card = (props) => {
  const { onPress, number = ''} = props;

  return (
    <Pressable style={style.card} onPress={onPress}>
      <Text style={style.cardText}>{number}</Text>
    </Pressable>
  );
}

export default Card;
