import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Botao() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
           Alert.alert('VER MAIS')
        }}
      >
        <Text style={styles.buttonText}>VER MAIS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: '#4361ee',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
