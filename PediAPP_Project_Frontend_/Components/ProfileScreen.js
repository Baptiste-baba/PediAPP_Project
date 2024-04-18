import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAuth } from '../contexts/AuthContext';

const ProfileScreen = () => {
  const [gender, setGender] = useState('');
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    childName: '',
    childDateOfBirth: '',
    gender: '',
  });

  useEffect(() => {
    fetch('http://172.20.10.11:3000/api/profile/661944c9f89be012a1133ad9', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data received:', data); // Ceci vous permettra de voir ce que vous recevez comme réponse
      setUserInfo(data);
    })
    .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleUpdateProfile = () => {
    // Ici, envoyez les données à l'API pour les mettre à jour
    fetch('http://172.20.10.11:3000/api/profile/${userId}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        <View style={styles.YouContainer}>
          <Text style={styles.sectionTitle}>You</Text>
        </View>
        <View style={styles.section1}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={userInfo.name}
              onChangeText={(text) => handleUpdateProfile({ ...userInfo, name: text })}
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
          <View style={styles.inputRow}>
            <Text style={styles.label}>Password</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => {/* Handle Password Change */}}>
              <Text style={styles.buttonText}>Modifier</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ChildContainer}>
          <Text style={styles.sectionTitle}>Your child</Text>
        </View>
        <View style={styles.section2}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={userInfo.childName}
              onChangeText={(text) => handleUpdateProfile('name', text)}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Date of birth</Text>
            <TextInput
              style={styles.input}
              value={userInfo.dateOfBirth}
              onChangeText={(text) => handleUpdateProfile('email', text)}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.container_3}>
                <Text style={styles.label}>Gender</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Male" value="male" />
                </Picker>
            </View>
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
  YouContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  section1: {
    flex: 6,
    alignContent: 'center',
    backgroundColor: '#e1e1ea',
    borderRadius: 25,
    marginHorizontal: 10,
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
    marginLeft: 20,
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
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 20,
    backgroundColor: '#fff', // Gris clair pour le fond de l'input
    borderRadius: 10,
    marginLeft: 20,
  },
  editButton: {
    backgroundColor: '#4169E1', // Bleu pour le bouton modifier
    padding: 10,
    borderRadius: 20,
    marginRight: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  ChildContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  section2: {
    flex: 6,
    flexDirection : 'start',
    backgroundColor: '#e1e1ea',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#4169E1', // Bleu pour le bouton sauvegarder
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
});

export default ProfileScreen;