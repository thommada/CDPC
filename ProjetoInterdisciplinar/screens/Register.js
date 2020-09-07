import React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'

import Style from '../styles/LoginRegister'
import DefaultStyle from '../styles/DefaultStyle'

class Register extends React.Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: "whitesmoke" }}>

                <Image
                    source={require('../assets/img/cdpc-circular.png')}
                    style={DefaultStyle.logo}
                ></Image>

                <Text style={Style.greetingRegister}>{`Insira seus dados pessoais e os dados da\n escola onde será entregue o experimento`}</Text>

                <View style={Style.form}>

                    <View>
                        <Text style={Style.title}>Dados Pessoais</Text>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Nome Completo</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='Digite o seu nome completo'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> CPF</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='XXX.XXX.XXX-XX'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Celular</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='(XX)XXXXX-XXXX'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Email</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='Digite o seu email'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Senha</Text>
                        </Text>
                        <TextInput style={Style.input} secureTextEntry autoCapitalize='none' placeholder='Digite a sua senha para fazer login na plataforma'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Confirme a senha</Text>
                        </Text>
                        <TextInput style={Style.input} secureTextEntry autoCapitalize='none' placeholder='Digite sua senha novamente'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={Style.title}>Dados da escola</Text>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Nome</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='Digite o nome da escola'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> CEP</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='Digite o cep da escola'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Logradouro</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='Digite sua Rua ou Avenida'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Número</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='Digite o número da sua residência'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Bairro</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='Digite o seu bairro'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={Style.inputTitle}>Complemento</Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='Casa, apartamento, lote'></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Telefone</Text>
                        </Text>
                        <TextInput style={Style.input} autoCapitalize='none' placeholder='(XX)XXXX-XXXX'></TextInput>
                    </View>

                </View>

                <TouchableOpacity style={DefaultStyle.button}>
                    <Text style={DefaultStyle.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
export default Register
