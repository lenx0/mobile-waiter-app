import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../types/User';
import { Container, Image, Input, InputContainer, TitleContainer } from './styles';
import { Text } from '../components/Text';
import { Button } from '../components/Button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post('http://192.168.18.2:3001/login', { email, password });
      console.log('entrou')
      console.log("res", res)
      const { token } = res.data;
      // Salve o token no AsyncStorage ou contexto global
      console.log('Token JWT:', token);
      // Alert.alert('Login realizado com sucesso!');
      if (res.data.token) {
        // Login bem-sucedido, navega para o componente Main
        navigation.navigate('Página inicial');
      }
    } catch (error) {
      Alert.alert('Erro ao fazer login', 'Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Text size={24} weight='700'>
          Comanda
          <Text size={24}> Rápida</Text>
          <Text color="#fff" size={14} opacity={0.9}>
            Entre com o usuário e senha
          </Text>
        </Text>
        <Image source={require('../assets/images/waiter.png')} />
      </TitleContainer>
      <InputContainer>
        <Input
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          placeholder="Senha"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          onPress={handleLogin}
          disabled={isLoading || email.length === 0 || password.length === 0}
          loading={isLoading}
        >
          Entrar
        </Button>
      </InputContainer>

    </Container>
  );
};



export default LoginScreen;
