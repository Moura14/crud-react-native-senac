import React, { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setError('');
    if (email === 'user@example.com' && password === '123456') {
      setUser({ email });
      navigation.replace('Tabs');
    } else {
      setError('Email ou senha inválidos');
    }
  };

  if (user) {
    return (
      <View style={styles.container}>
        <Text>Bem vindo, {user.email}!</Text>
        <Button title="Logout" onPress={() => setUser(null)} />
      </View>
    );
  }

  return (
    <ImageBackground source={require('../../assets/images/login.jpg')} style={styles.background}>
      <Text style={styles.title}>Login</Text>
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
          secureTextEntry={true}
        />
        {!!error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: '#FFF' }}>Não tem uma conta? Cadastre-se</Text>
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
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
