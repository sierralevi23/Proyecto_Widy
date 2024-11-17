import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import styles from './turnero_style'; // Importa los estilos

const Turnero = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [turno, setTurno] = useState('');
    const [fecha, setFecha] = useState('');
    const [motivo, setMotivo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
    };

    return (
        <View style={styles.turneroContainer}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Turnero</Text>
                <Text style={styles.subtitle}>Datos para sacar turno con el psicopedagogo de la escuela</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre..."
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido..."
                    value={apellido}
                    onChangeText={setApellido}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail..."
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.select}
                    placeholder="En que turno estas..."
                    value={turno}
                    onChangeText={setTurno}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Fecha..."
                    value={fecha}
                    onChangeText={setFecha}
                />
                <TextInput
                    style={styles.textarea}
                    placeholder="ingrese los motivos..."
                    value={motivo}
                    onChangeText={setMotivo}
                    multiline
                />
                <Button title="Pedir turno" onPress={handleSubmit} color="#000" />
            </View>
            <Image source={{ uri: 'https://pbs.twimg.com/profile_images/1010352067221782528/kezuc7K5_400x400.jpg' }} style={styles.image} />
        </View>
    );
};

export default Turnero;
