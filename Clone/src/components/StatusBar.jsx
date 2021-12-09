import React from 'react';
import { View, StatusBar } from 'react-native';
import { style } from './componentStyles';

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
    <View style={[style.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
export default GeneralStatusBarColor;