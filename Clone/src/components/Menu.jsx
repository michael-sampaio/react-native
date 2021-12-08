import React from 'react';
import { Text, Pressable } from 'react-native';
import { style } from './componentStyles';

export default function MenuButton(props) {
    const { onPress, title = '' } = props;
    return (
        <Pressable style={style.menuButton} onPress={onPress}>
            <Text style={style.menuText}>{title}</Text>
        </Pressable>
    );
}
