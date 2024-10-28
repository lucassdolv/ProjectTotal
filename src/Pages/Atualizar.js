import axios from "axios";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Atualizar() {
    const [ novoNome, setNovoNome] = useState();
    const [ novoTelefone, setNovoTelefone] = useState();


    const listContatos = (id) => {
        axios
            .put(`http://10.0.2.2:3000/contatos/${id}`,setNovoNome, setNovoTelefone)
            .then(resposta => {
                if(resposta.status === 201){
                  Alert.alert('Sucesso, contato atualizado!')
                  setNome('')
                  setTelefone('')
                }else{
                  Alert.alert("Erro, falha ao atualizar contato.")
                }
              })
            .catch((error) => {
                console.error("Erro ao buscar o contato", error)
            })
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualização de contato</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} placeholder="Digite o novo nome"/>
        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} placeholder="Digite o novo numero"/>
        <Button title="Cancelar" />
        <Button title="Atualizar" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  form: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5
  }
});
