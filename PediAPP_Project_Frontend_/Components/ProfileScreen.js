import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    childName: '',
    childDateOfBirth: '',
  });

  useEffect(() => {
    // Ici, remplacez 'your_api_endpoint' par votre endpoint pour récupérer les infos de l'utilisateur
    fetch('http://192.168.0.107:3000/api/profile/${userId}', {
      method: 'GET',
      headers: {
        // Include headers if needed, like authorization token
      },
    })
    .then(response => response.json())
    .then(data => setUserInfo(data))
    .catch(error => console.error(error));
  }, []);

  const handleUpdateProfile = () => {
    // Ici, envoyez les données à l'API pour les mettre à jour
    fetch('http://192.168.0.107:3000/api/profile/${userId}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include headers if needed, like authorization token
      },
      body: JSON.stringify(userInfo),
    })
    .then(response => response.json())
    .then(data => {
      // Gérer la réponse ici
      console.log(data);
    })
    .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Text style={styles.title}>PROFIL</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.section1}>
          <Text style={styles.sectionTitle}>You</Text>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={userInfo.name}
              onChangeText={(text) => handleUpdateProfile('name', text)}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={userInfo.email}
              onChangeText={(text) => handleUpdateProfile('email', text)}
              keyboardType="email-address"
            />
          </View>
          {/* Vous pourriez avoir un bouton pour changer le mot de passe ici */}
          <View style={styles.inputRow}>
            <Text style={styles.label}>Password</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => {/* Handle Password Change */}}>
              <Text style={styles.buttonText}>Modifier</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section2}>
          <Text style={styles.sectionTitle}>Your child</Text>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={userInfo.name}
              onChangeText={(text) => handleUpdateProfile('name', text)}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={userInfo.email}
              onChangeText={(text) => handleUpdateProfile('email', text)}
              keyboardType="email-address"
            />
          </View>
          {/* Répéter pour le nom de l'enfant et la date de naissance */}
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3399ff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  container2: {
    flex: 5,
  },
  section1: {
    flex: 1,
    flexDirection : 'start',
    backgroundColor: '#e1e1ea',
    borderRadius: 25,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginTop: '10%',
    color: '#ffffff',
    marginBottom: 20,
  },
  tab: {
    color: 'rgba(255, 255, 255, 0.7)',
    paddingBottom: 10,
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
    color: '#304FFE', // Bleu foncé pour le titre de la section
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
    color: '#304FFE', // Bleu foncé pour le texte du label
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#e6e6e6', // Gris clair pour le fond de l'input
    borderRadius: 10,
  },
  editButton: {
    backgroundColor: '#4169E1', // Bleu pour le bouton modifier
    padding: 10,
    borderRadius: 20,
  },
  saveButton: {
    backgroundColor: '#4169E1', // Bleu pour le bouton sauvegarder
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  section2: {
    flex: 1,
    flexDirection : 'start',
    backgroundColor: '#e1e1ea',
    borderRadius: 25,
    marginTop: 20,
  },
});

export default ProfileScreen;