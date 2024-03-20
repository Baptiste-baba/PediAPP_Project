import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

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
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot your password ?</Text>
      <Text style={styles.register}>Don’t have an account yet ?</Text>
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
    color: 'grey' // Adjust the color to match the screenshot
  }
});

export default LoginScreen;
