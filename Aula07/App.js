import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Pessoa from "./src/model/pessoa";

export default function App() {
  const [nome, setNome] = useState(null);
  const [idade, setIdade] = useState(null);
  const [listaPessoas, setListaPessoas] = useState([]);

  useEffect(async () => {
    await Pessoa.createTable();
    setListaPessoas(await Pessoa.query());
  }, []);

  const handleClick = async () => {
    if (nome === null || idade === null) return;

    const novaPessoa = new Pessoa({
      nome: nome,
      age: idade,
    });
    await novaPessoa.save();
    setListaPessoas(await Pessoa.query());

    setNome(null);
    setIdade(null);
  };

  const handleDelete = () => {
    Pessoa.destroyAll();
    setListaPessoas([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Digite eu Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Digite sua Idade"
        value={idade}
        onChangeText={setIdade}
      />
      <Button title="Cadastre-se" onPress={handleClick} />
      <Button title="Excluir Lista" onPress={handleDelete} />

      <Text style={{ marginTop: 10, marginBottom: 10 }}>LISTA DE PESSOAS</Text>

      {listaPessoas.map((pessoa) => {
        return (
          <View key={pessoa.id}>
            <Text>ID: {pessoa.id}</Text>
            <Text>NOME: {pessoa.nome}</Text>
            <Text>IDADE:{pessoa.age}</Text>
          </View>
        );
      })}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
  },
});
