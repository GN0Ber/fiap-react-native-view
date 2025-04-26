// Importa modulos necessários do React, React Native e Componentes
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// Define o componente do App
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Quadrado vermelho no canto superior esquerdo */}
      <View style={styles.quadradoVermelho}/>
      
      {/* Círculo azul no meio da tela */}
      <View style={styles.circuloAzul}/>

      {/* View com texto cinza no canto inferior direto */}
      <View style={styles.textoContainer}>
          <Text style={styles.texto}>Olá, React Native!</Text>  
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadradoVermelho: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  circuloAzul: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  textoContainer: {
    marginTop: 400,
    padding: 40,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    top: 50,
    left: 50,
    width: 350,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

// Exporta o componente App como padrão
export default App;