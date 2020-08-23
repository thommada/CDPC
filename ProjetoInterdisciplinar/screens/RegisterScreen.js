import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default class RegisterScreen extends React.Component {

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <ScrollView>

                <Image
                    source={require('./assets/cdpc-circular-100x100.png')}
                    style={{ alignSelf: "center", marginTop: 32 }}
                ></Image>

                <Text style={styles.greeting}>{`Insira seus dados pessoais e os dados da\n escola onde será entregue o experimento`}</Text>

                <View style={styles.form}>

                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>Dados Pessoais</Text>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Nome Completo</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>CPF</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Celular</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Senha</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Confirme a senha</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>Dados da escola</Text>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Nome</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>CEP</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Endereço</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Número</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Bairro</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Complemento</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Telefone</Text>
                        <TextInput style={styles.input} autoCapitalize='none'></TextInput>
                    </View>

                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 32,
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
        justifyContent: "center",
        marginBottom: 32
    },
    buttonText: {
        color: 'white',
        fontWeight: '500'
    }
})