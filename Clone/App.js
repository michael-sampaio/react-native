import React from 'react';
import Home from './src/pages/Home';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Home />
    );
  }
}