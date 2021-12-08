import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
      <Button title="ir para Home" 
      onPress={() => navigation.navigate("Home")}/>
    </View>
  );
}