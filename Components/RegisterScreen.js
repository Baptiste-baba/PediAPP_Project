import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [childName, setChildName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>PEDIAPP</Text>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.section}>About you</Text>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <TextInput style={styles.input} placeholder="Confirm password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
            <Text style={styles.section}>About your child</Text>
            <TextInput style={styles.input} placeholder="Name" value={childName} onChangeText={setChildName} />
            <TextInput style={styles.input} placeholder="Date of birth" value={dateOfBirth} onChangeText={setDateOfBirth} />
            <View style={styles.checkboxContainer}>
                <CheckBox value={gender === 'female'} onValueChange={() => setGender('female')} />
                <Text style={styles.label}>Female</Text>
                <CheckBox value={gender === 'male'} onValueChange={() => setGender('male')} />
                <Text style={styles.label}>Male</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.linkText}>I already have an account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 24,
        color: '#000',
        marginBottom: 40,
    },
    title: {
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
    },
    section: {
        alignSelf: 'flex-start',
        marginLeft: 40,
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: 300,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#DDD',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    label: {
        margin: 8,
    },
    button: {
        width: 300,
        height: 40,
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