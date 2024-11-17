import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Picker } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Importa el calendario
import styles from './turnero_style'; // Importa los estilos

const Turnero = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [turno, setTurno] = useState('');
    const [fecha, setFecha] = useState('');
    const [motivo, setMotivo] = useState('');
    const [showCalendar, setShowCalendar] = useState(false); // Estado para mostrar el calendario

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
    };

    const onDayPress = (day) => {
        setFecha(day.dateString); // Establece la fecha seleccionada
        setShowCalendar(false); // Oculta el calendario
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
                <Picker
                    selectedValue={turno}
                    style={styles.select}
                    onValueChange={(itemValue) => setTurno(itemValue)}
                >
                    <Picker.Item label="Selecciona un turno..." value="" />
                    <Picker.Item label="Turno mañana" value="mañana" />
                    <Picker.Item label="Turno tarde" value="tarde" />
                    <Picker.Item label="Turno vespertino" value="vespertino" />
                </Picker>
                <TextInput
                    style={styles.input}
                    placeholder="Fecha..."
                    value={fecha}
                    onFocus={() => setShowCalendar(true)} // Muestra el calendario al enfocar
                />
                {showCalendar && (
                    <Calendar
                        onDayPress={onDayPress}
                        markedDates={{
                            [fecha]: { selected: true, marked: true, selectedColor: 'blue' },
                        }}
                    />
                )}
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
