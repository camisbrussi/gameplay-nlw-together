import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useAuth } from '../../hooks/auth';
import { AuthError } from 'expo-auth-session';
import { theme } from '../../global/styles/theme';

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}e organize suas {'\n'}
            jogatinas {'\n'}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar no Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
