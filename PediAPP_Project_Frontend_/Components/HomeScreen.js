// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();

    const handleSearch = () => {
        // Ajoutez la logique de recherche ici
        console.log(searchQuery);
    };

    const handleDiseasePress = (diseaseName) => {
        // Gérez le clic sur un bouton maladie
        navigation.navigate('DiseaseInfoScreen', { diseaseName });
    };

    return (
        <View style={styles.container}>
            <View style={styles.container_0}>
                <Text style={styles.header}>PEDIAPP</Text>
                <Text style={styles.title}>Search for information on a disease</Text>
                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        onSubmitEditing={handleSearch}
                    />
                </View>
            </View>
            <View style={styles.container_1}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => handleDiseasePress('Asthme')}>
                        <Text style={styles.buttonText}>ASTHMA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleDiseasePress('Allergy')}>
                        <Text style={styles.buttonText}>ALLERGY</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => handleDiseasePress('Epilepsy')}>
                        <Text style={styles.buttonText}>EPILEPSY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleDiseasePress('4')}>
                        <Text style={styles.buttonText}>DIABETES</Text>
                    </TouchableOpacity>
                </View>
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
        flex: 1,
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
    title: {
        textAlign: 'center',
        marginHorizontal: 20,
        fontSize: 20,
        color:'#ffffff',
        marginBottom: 20,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 16,
        backgroundColor: '#ffffff',
    },
    container_1: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#4169E1',
        padding: 10,
        borderRadius: 10,
        height: '50%',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
    },
});

export default HomeScreen;