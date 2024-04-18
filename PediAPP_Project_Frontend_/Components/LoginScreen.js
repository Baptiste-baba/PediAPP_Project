import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/AuthContext'; // Assurez-vous que le chemin est correct
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation

const LoginScreen = () => {
  const navigation = useNavigation(); // Utilisez le hook useNavigation
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToRegister = () => {
    navigation.navigate('Register'); // Assurez-vous que 'Register' est le nom que vous avez utilisé dans votre Stack.Navigator pour RegisterScreen
  };

  const handleLogin = async () => {
    try {
        const response = await fetch('http://172.20.10.11:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, // Assurez-vous que ce champ correspond à ce que le backend attend
                password,
            }),
        });

        const data = await response.json();

        if (response.status === 200) {
            console.log('Connexion réussie:', data);
            signIn({ email });
            // Vous pourriez maintenant naviguer vers l'écran principal de l'application
            // ou stocker le jeton d'authentification dans un état global / local storage.
        } else {
            console.error('Erreur lors de la connexion:', data.message);
        }
    } catch (error) {
        console.error('Erreur de réseau :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PEDIAPP</Text>
      <Text style={styles.label}>Log in</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot your password ?</Text>
      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.register}>Don't have an account yet ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#304FFE', // Adjust the color to match the screenshot
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 40, // Adjust according to your layout
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20, // Adjust for rounded corners
    borderColor: 'transparent', // Hide border
  },
  button: {
    backgroundColor: '#304FFE', // Adjust the color to match the screenshot
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  forgotPassword: {
    margin: 20,
    color: 'blue', // Adjust the color to match the screenshot
  },
  register: {
    color: 'blue' // Adjust the color to match the screenshot
  }
});

export default LoginScreen;