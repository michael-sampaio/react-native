import React, { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import axios from 'axios';
import gato from './assets/gato.jpg';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);

  const handleClick = async () => {

    setLoading(true)

    await axios({
      method: "GET",
      url: "https://api.thecatapi.com/v1/images/search",
      responseType: "json",
    }).then((response) => {
      setApiData(response.data[0].url)});

    setLoading(false);
    console.log("TERMINEI A FUNÇÃO");
  };

  return ( 
    <View style = {styles.container} >
      <View style = {styles.imgContainer} >
        <Image style={styles.img} source = {gato} resizeMode = 'contain' / >
      </View> 
      <View style = {styles.btnContainer} >
        <Button title = "VEJA OUTRO GATINHO" onPress = {handleClick} disabled = {loading}/>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 2,
  },
  btnContainer: {
    flex: 1,
  },
  img: {
    width: 200,
    height: 500,
  },
});