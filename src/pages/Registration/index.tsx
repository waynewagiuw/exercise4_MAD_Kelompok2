import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import SubTitle from '../../components/SubTitle'
import Input from '../../components/Input';

const Registration = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();

    const handleRegister = () => {
        console.log("Name:", name);
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Address:", address);
        console.log("Phone Number:", phoneNumber);

        navigation.navigate('UserList');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{ marginHorizontal: 25, marginVertical: 10 }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black', marginTop: 15 }}>Registration</Text>
                <SubTitle title="Name" />
                <Input placeholder={"Masukan nama lengkap anda"} onChangeText={setName} value={name} />
                <SubTitle title="Username" />
                <Input placeholder={"Masukan username anda"} onChangeText={setUsername} value={username} />
                <SubTitle title="Email" />
                <Input placeholder={"Masukan email anda"} onChangeText={setEmail} value={email} />
                <SubTitle title="Address" />
                <Input placeholder={"Masukan alamat anda"} onChangeText={setAddress} value={address} />
                <SubTitle title="Phone Number" />
                <Input placeholder={"Masukan Nomor telepon anda"} onChangeText={setPhoneNumber} value={phoneNumber} keyboardType="numeric" />
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        fontSize: 18,
        padding: 10,
    },
    button: {
        backgroundColor: "#ba55d3",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginTop: 45,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default Registration;
