import React from 'react';
import { Text, Pressable } from 'react-native';
import { style } from './componentStyles';

export default function Button(props) {
  const { onPress, title = '' } = props;

  return (
    <Pressable style={style.categoriesButton} onPress={onPress}>
      <Text style={style.categoriesText}>{title}</Text>
    </Pressable>
  );
}