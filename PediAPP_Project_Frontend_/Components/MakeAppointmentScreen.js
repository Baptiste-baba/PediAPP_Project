import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image, TextInput, onPress } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation


const MakeAppointmentScreen = () => {
    const navigation = useNavigation();
    const [Doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.107:3000/api/Doctors')
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(error => console.error(error));
    }, []);

    const navigateToMyAppointments = () => {
        navigation.navigate('CalendarScreen'); // Assurez-vous que 'Register' est le nom que vous avez utilisé dans votre Stack.Navigator pour RegisterScreen
      };

    return (
        <View style={styles.container}>
          <View style={styles.container_0}>
            <Text style={styles.header}>Make an appointment</Text>
          </View>
          <View style={styles.container_1}>
            <TouchableOpacity style={styles.button} onPress={navigateToMyAppointments}>
                <Image
                    source={require('../assets/icons/arrow-left.png')} // Assurez-vous d'avoir une icône de retour/flèche
                    style={styles.icon}
                />
                <Text style={styles.text}>Return</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container_A}>
            <TextInput 
                style={styles.searchBar} 
                placeholder="Search" 
                placeholderTextColor="#ffffff" 
            />
          </View>
          <View style={styles.container_B}>
          <Image 
          source={require('../assets/icons/localisation.png')} 
          style={styles.iconLocalisation} 
          />

          </View>
          <View style={styles.container_2}>
            <FlatList
              data={Doctors}
              renderItem={({ item }) => (
                <View style={styles.appointmentCard}>
                  <View style={styles.infoContainer}>
                    <Text style={styles.doctor}>Doctor {item.doctorName}</Text>
                    <Text style={styles.details}>FOR {item.speciality}</Text>
                    <Text style={styles.address}>{item.address}</Text>
                  </View>
                  <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.moreButton}>
                        <Image source={require('../assets/icons/arrow.png')} style={styles.moreIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={item => item._id}
            />
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    container_0: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3399ff',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    header: {
        fontSize: 24,
        marginTop: '10%',
        color: '#ffffff',
        marginBottom: 20,
    },
    container_1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'start',
    },
    button: {
        flexDirection: 'row', // Aligner horizontalement l'icône et le texte
        alignItems: 'center', // Aligner verticalement l'icône et le texte
        padding: 10, // Espace autour du texte et de l'icône
        // Autres styles si nécessaires (ombre, bordure, etc.)
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 2, // Espace entre l'icône et le texte
    },
    text: {
        color: '#1a75ff', // Couleur du texte
        fontSize: 20, // Taille du texte
        // Ajoutez des styles de texte supplémentaires si nécessaires
    },
    container_A: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    searchBar: {
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 16,
        color: '#ffffff',
        backgroundColor: '#1a75ff',
    },
    tab: {
        fontSize: 18,
        color: '#000',
    },
    container_B: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconLocalisation: {
        width: 30,
        height: 30,
    },
    container_2: {
        flex: 5,
        justifyContent: 'center',
    },
    appointmentCard: {
        flexDirection: 'row', // Organise les enfants de la carte horizontalement
        justifyContent: 'space-between', // Distribue l'espace également entre les enfants
        backgroundColor: '#ffffff',
        padding: 20,
        marginHorizontal: 25,
        borderRadius: 20,
    },
    infoContainer: {
        flex: 5,
        flexDirection: 'column', // Organise les informations du docteur verticalement
    },
    appointmentHeader: {
        height: 50,
        borderRadius: 20,
        backgroundColor: '#3385ff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 16,
    },
    card: {
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
      
    },
    date: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    time: {
        fontSize: 16,
        color: '#ffffff',
        marginLeft: 10,
    },
    doctor: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    details: {
        fontSize: 14,
        color: '#000',
    },
    address: {
        fontSize: 14,
        color: '#000',
    },
    ButtonContainer: {
        flex: 1,
        flexDirection: 'column', // Organise les informations du docteur verticalement
        padding: 10,
    },
    moreButton: {
        marginLeft: 'auto',
        flexDirection: 'row',
    },
    moreIcon: {
        width: 60,
        height: 60,
    },
    container_3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    makeAppointmentButton: {
        backgroundColor: '#4169E1',
        padding: 15,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MakeAppointmentScreen;