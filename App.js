import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
 const [age, setAge] = useState('');
 const [greeting, setGreeting] = useState('');

 const handleAge = () => {
    const ageNumber = parseInt(age, 10);
    if (ageNumber >= 0 && ageNumber <= 12) {
      setGreeting(`Você é uma criança.`);
    } else if (ageNumber >= 13 && ageNumber <= 17) {
      setGreeting(`Você é um adolescente.`);
    } else if (ageNumber >= 18 && ageNumber <= 20) {
      setGreeting(`Você é um jovem.`);
    } else if (ageNumber >= 21 && ageNumber <= 60) {
      setGreeting(`Você é um adulto.`);
    } else if (ageNumber > 60) {
      setGreeting(`Você é um idoso.`);
    } else {
      setGreeting(`Por favor, insira uma idade válida.`);
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Exemplo de Variável em React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setAge(text)}
        value={age.toString()}
        keyboardType="numeric"
      />
      <Button title="Classificar" onPress={handleAge} />
      <Text style={styles.greeting}>{greeting}</Text>
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
 },
 title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
 },
 greeting: {
    marginTop: 20,
    fontSize: 18,
 },
});