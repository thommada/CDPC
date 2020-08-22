import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class LoadingScreen extends React.Component {

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{`Seja bem vindo,\nao aplicativo do CDPC`}</Text>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Senha</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize='none'></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }}>
                    <Text style={{ color: '#8A8F9E', fontSize: 13 }}>
                        É novo no CDPC? <Text style={{ color: '#228B22', fontWeight: '500' }}>Faça seu cadastro</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    greeting: {
        marginBottom: 50,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 16,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#228B22",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: 'white',
        fontWeight: '500'
    }
})