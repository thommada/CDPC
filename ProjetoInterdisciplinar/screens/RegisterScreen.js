import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, LayoutAnimation, ScrollView } from 'react-native';

export default class RegisterScreen extends React.Component {

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <ScrollView>

                <Image
                    source={require('../assets/cdpc-circular.png')}
                    style={styles.logo}
                ></Image>

                <Text style={styles.greeting}>{`Insira seus dados pessoais e os dados da\n escola onde será entregue o experimento.`}</Text>

                <View style={styles.form}>

                    <View>
                        <Text style={styles.title}>Dados Pessoais</Text>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> Nome Completo</Text>
                        </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='Digite o seu nome completo'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> CPF</Text>
                        </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='XXX.XXX.XXX-XX'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> Celular</Text>
                            </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='(XX)XXXXX-XXXX'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> Email</Text>
                        </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='Digite o seu email'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> Senha</Text>
                            </Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize='none' placeholder='Digite a sua senha para fazer login na plataforma'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> Confirme a senha</Text>
                        </Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize='none' placeholder='Digite sua senha novamente'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.title}>Dados da escola</Text>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> Nome</Text>
                        </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='Digite o nome da escola'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> CEP</Text>
                        </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='Digite o cep da escola'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> Logradouro</Text>
                        </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='Digite sua Rua ou Avenida'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> Número</Text>
                        </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='Digite o número da sua residência'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}> Bairro</Text>
                        </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='Digite o seu bairro'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Complemento</Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='Casa, apartamento, lote'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{color: 'red'}}>*
                            <Text style={styles.inputTitle}>Telefone</Text>
                        </Text>
                        <TextInput style={styles.input} autoCapitalize='none' placeholder='(XX)XXXX-XXXX'></TextInput>
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
    title: {
        textAlign: 'center', 
        fontSize: 25
    },
    inputTitle: {
        color: "#131416",
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
    },
    logo: {
        alignSelf: "center",
        marginTop: 32,
        height: 180,
        width: 180
    }
})