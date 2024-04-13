import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [childName, setChildName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            // Affichez une erreur si les mots de passe ne correspondent pas
            console.error('Les mots de passe ne correspondent pas.');
            return;
        }
    
        try {
            const response = await fetch('http://192.168.0.107:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    name,
                    password, // Ceci est sécurisé si votre API est en HTTPS
                    childName,
                    dateOfBirth,
                    gender,
                }),
            });
    
            const data = await response.json();
    
            if (response.status === 200) {
                // Gérer la réussite, peut-être naviguer vers la page de connexion ou l'écran d'accueil
            } else {
                // Gérer les erreurs venant de l'API
                console.error(data.message || 'Une erreur est survenue lors de l\'inscription.');
            }
        } catch (error) {
            // Gérer les erreurs de requête
            console.error('Erreur de réseau : ', error);
        }

        try {
            const response = await fetch('http://192.168.0.107:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // ... données de l'utilisateur ...
                }),
            });
    
            const textResponse = await response.text(); // Lisez d'abord la réponse en tant que texte
    
            try {
                const data = JSON.parse(textResponse); // Essayez ensuite de l'analyser comme JSON
                // ... la suite du traitement ...
            } catch (jsonParseError) {
                console.error('La réponse n\'est pas au format JSON :', textResponse);
                // Vous pouvez aussi renvoyer ici ou lancer une autre erreur si nécessaire
            }
        } catch (networkError) {
            // Gérer les erreurs de requête
            console.error('Erreur de réseau : ', networkError);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.container_0}>
            <Text style={styles.header}>PEDIAPP</Text>
            </View>
            <View style={styles.container_1}>
                <Text style={styles.title}>Sign up</Text>
                <Text style={styles.section}>About you</Text>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
                <TextInput style={styles.input} placeholder="Confirm password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

                <Text style={styles.section}>About your child</Text>
                <TextInput style={styles.input} placeholder="Name" value={childName} onChangeText={setChildName} />
                <TextInput style={styles.input} placeholder="Date of birth" value={dateOfBirth} onChangeText={setDateOfBirth} />
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
            <View style={styles.container_4}>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.linkText}>I already have an account</Text>
                </TouchableOpacity>
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
    },
    container_1: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        marginTop: '5%',
        fontSize: 20,
        color: '#3366ff',
    },
    section: {
        alignSelf: 'flex-start',
        marginLeft: '10%',
        fontSize: 16,
        color: '#3366ff',
        marginBottom: '3%',
    },
    input: {
        height: '9%',
        width: '80%',
        marginBottom: '5%',
        paddingHorizontal: '5%',
        borderRadius: 15,
        backgroundColor: '#DDD',
    },
    container_3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    picker: {
        height: '10%',
        width: '80%',
        marginBottom: '35%',
    },
    label: {
        marginTop: '9%',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        fontSize: 16,
        color: '#3366ff',
    },
    container_4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: '35%',
        height: '30%',
        backgroundColor: '#4169E1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    linkText: {
        color: '#4169E1',
        fontSize: 16,
    },
});

export default RegisterScreen;