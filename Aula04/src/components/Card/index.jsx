import React from 'react';
import { Text } from "react-native";

export default function Card({ props }) {
    return (
        <>
            {props?.listItem.map((item) => (
                <Text>{item}</Text>
            ))}
        </>
    );
}