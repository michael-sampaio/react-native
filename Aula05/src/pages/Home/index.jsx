import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
      <Button title="ir para Login" onPress={() => navigation.goBack()}/>
    </View>
  );
}