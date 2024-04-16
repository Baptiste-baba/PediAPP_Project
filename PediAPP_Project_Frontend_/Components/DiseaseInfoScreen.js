import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DiseaseInfoScreen = () => {
  const route = useRoute();
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const { diseaseName } = route.params; // Assurez-vous d'envoyer diseaseId en paramètre lors de la navigation vers cet écran

  useEffect(() => {
    // Remplacer 'your_api_endpoint' par l'URL de votre API et 'diseaseId' par l'identifiant approprié
    fetch(`http://192.168.0.107:3000/api/diseases/${diseaseName}`)
      .then(response => response.json())
      .then(data => setDiseaseInfo(data))
      .catch(error => console.error(error));
  }, [diseaseName]);

  // Si les informations sur la maladie n'ont pas encore été chargées, afficher un message de chargement
  if (!diseaseInfo) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{diseaseInfo.diseaseName}</Text>
      <View style={styles.tabContainer}>
        <Text style={styles.activeTab}>Description</Text>
        <Text style={styles.tab}>Monitoring my child</Text>
      </View>
      <View style={styles.titleheader}>
        <Text style={styles.title}>What is it?</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.description}>{diseaseInfo.description}</Text>
      </View>
      <View style={styles.titleheader}>
        <Text style={styles.title}>Symptoms</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.description}>{diseaseInfo.symptom}</Text>
      </View>
      <View style={styles.titleheader}>
        <Text style={styles.title}>Treatment</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.description}>{diseaseInfo.treatment}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: 50,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#3399ff', // Couleur de fond de l'en-tête
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  tab: {
    // Styles pour les onglets non actifs
  },
  titleheader: {
    height: 50,
    borderRadius: 20,
    backgroundColor: '#3385ff',
    padding: 10,
    marginHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0000ff',
  },
  contentContainer: {
    backgroundColor: '#F5FCFF',
    padding: 20,
    marginHorizontal: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#0000ff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default DiseaseInfoScreen;