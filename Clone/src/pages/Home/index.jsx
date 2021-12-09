import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { style } from '../../components/componentStyles';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Banner1 from '../../components/Banner1';
import Banner2 from '../../components/Banner2';
import Assurance from '../../components/Assurance';
import Footer from '../../components/Footer.jsx';
import { Ionicons } from '@expo/vector-icons';
import StatusBar from '../../components/StatusBar';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#24145f" />
            <Header />
            <View style={style.menu}>
                <Menu title='Jerseys' />
                <Menu title='Men' />
                <Menu title='Women' />
                <Menu title='More' />
                <Menu title={<Ionicons name="search" size={24} color="white" />} />
            </View>
            <ScrollView>
                <Banner1 />
                <Banner2 />
                <View style={style.categories}>
                    <Button title='NEW ARRIVALS' />
                    <Button title='BEST SELLERS' />
                    <Button title='EXTENDED SIZING' />
                    <Button title='VIEW ALL' />
                </View>
                <View style={style.highlight}>
                    <Text style={style.highlight}>SHOP BY BRAND</Text>
                </View>
                <View style={style.highlight}>
                    <Text style={style.highlight}>SHOP BY PLAYER</Text>
                </View>
                <View style={style.card}>
                    <Card number='#8' style={style.cardText} />
                    <Card number='#27' style={style.cardText} />
                    <Card number='#44' style={style.cardText} />
                    <Card number='#89' style={style.cardText} />
                </View>
                <Assurance />
            </ScrollView>
            <Footer />
        </View>
    );
}