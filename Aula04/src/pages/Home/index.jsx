import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
    const [text, setText] = useState("");
    const [listItem, setListItem]= useState([]);

    const handleClick = () => {
        setListItem([...listItem, text]);
        setText("");
    };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Button title="Inserir Item" onPress={handleClick} />
      {listItem.map((item) => (
          <Text>{item}</Text>
      ))}
    </View>
  );
}
