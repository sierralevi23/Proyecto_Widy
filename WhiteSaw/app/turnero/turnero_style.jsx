import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    turneroContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    formContainer: {
        flex: 1,
        marginRight: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    select: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    textarea: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 100,
    },
    image: {
        width: 550,
        height: 550,
    },
});

export default styles;
