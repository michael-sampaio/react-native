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
import Product1 from '../../components/Product1';
import Product2 from '../../components/Product2';
import Product3 from '../../components/Product3';
import Product4 from '../../components/Product4';
import Product5 from '../../components/Product5';
import Merchandising1 from '../../components/Merchandising1';
import Merchandising2 from '../../components/Merchandising2';
import About from '../../components/About';

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
            <ScrollView >
                <Banner1 />
                <Banner2 />
                <Product1 />
                <Product2 />
                <View style={style.categories}>
                    <Button title='NEW ARRIVALS' />
                    <Button title='BEST SELLERS' />
                    <Button title='EXTENDED SIZING' />
                    <Button title='VIEW ALL' />
                </View>
                <Product3 />
                <Product4 />
                <Merchandising1 />
                <View style={style.highlight}>
                    <Text style={style.highlight}>SHOP BY BRAND</Text>
                </View>
                <Product5 />
                <Merchandising2 />
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
                <About />
            </ScrollView>
            <Footer />
        </View>
    );
}