import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não conferem');
      return;
    }

    // Simular registro válido
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
      {
        text: 'OK',
        onPress: () => navigation.replace('Login'),
      },
    ]);
  };

  return (
    <ImageBackground source={require('../../assets/images/login.jpg')} style={styles.background}>
      <Text style={styles.title}>Registro</Text>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Informe seus dados</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        {!!error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: '#FFF' }}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    color: '#FFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
    width: '90%',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    marginBottom: 10,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: '#080',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
});
