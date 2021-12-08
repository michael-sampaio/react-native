import React from 'react';
import { Text, Pressable } from 'react-native';
import { style } from './componentStyles';

export default function Button(props) {
  const { onPress, title = '' } = props;

  return (
    <Pressable style={style.button} onPress={onPress}>
      <Text style={style.text}>{title}</Text>
    </Pressable>
  );
}