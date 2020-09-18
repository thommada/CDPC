import React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, ScrollView, Alert } from 'react-native'

import Loading from '../screens/Loading'
import Style from '../styles/LoginRegister'
import DefaultStyle from '../styles/DefaultStyle'

import firebase from '../components/firebase/config'

class Register extends React.Component {
    constructor() {
        super()

        this.dbRef = firebase.firestore().collection('users')

        this.state = {
            nameUser: '',
            cpfUser: '',
            cellUser: '',
            emailUser: '',
            password: '',
            confirmPassword: '',
            nameSchool: '',
            cepSchool: '',
            streetSchool: '',
            numberSchool: '',
            neighborhoodSchool: '',
            referenceSchool: '',
            phoneSchool: '',
            isLoading: false
        }
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state
        state[prop] = val
        this.setState(state)
    }

    storeUser() {
        if (this.state.emailUser === '') {
            Alert.alert(
                'Informações de login',
                "O campo 'E-mail' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.password === '') {
            Alert.alert(
                'Informações de login',
                "O campo 'Senha' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.confirmPassword === '') {
            Alert.alert(
                'Informações de login',
                "O campo 'Confirme a senha' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.password !== this.state.confirmPassword) {
            Alert.alert(
                'Informações de login',
                "As senhas não coincidem!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.nameUser === '') {
            Alert.alert(
                'Dados pessoais',
                "O campo 'Nome completo' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.cpfUser === '') {
            Alert.alert(
                'Dados pessoais',
                "O campo 'CPF' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.cellUser === '') {
            Alert.alert(
                'Dados pessoais',
                "O campo 'Celular' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.nameSchool === '') {
            Alert.alert(
                'Dados da escola',
                "O campo 'Nome' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.cepSchool === '') {
            Alert.alert(
                'Dados da escola',
                "O campo 'CEP' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.streetSchool === '') {
            Alert.alert(
                'Dados da escola',
                "O campo 'Logradouro' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.numberSchool === '') {
            alert()
            Alert.alert(
                'Dados da escola',
                "O campo 'Número' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.neighborhoodSchool === '') {
            Alert.alert(
                'Dados da escola',
                "O campo 'Bairro' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else if (this.state.phoneSchool === '') {
            Alert.alert(
                'Dados da escola',
                "O campo 'Telefone' é obrigatório!",
                [
                    {
                        text: 'OK',
                    }
                ],
                { cancelable: true }
            )
            this.setState({
                isLoading: false,
            })
        } else {
            this.setState({
                isLoading: true,
            })
            firebase.auth().createUserWithEmailAndPassword(this.state.emailUser, this.state.password).then((response) => {
                const uid = response.user.uid
                const login = {
                    id: uid,
                    nameUser: this.state.nameUser,
                    cpfUser: this.state.cpfUser,
                    cellUser: this.state.cellUser,
                    emailUser: this.state.emailUser,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                    nameSchool: this.state.nameSchool,
                    cepSchool: this.state.cepSchool,
                    streetSchool: this.state.streetSchool,
                    numberSchool: this.state.numberSchool,
                    neighborhoodSchool: this.state.neighborhoodSchool,
                    referenceSchool: this.state.referenceSchool,
                    phoneSchool: this.state.phoneSchool
                }
                this.dbRef.doc(uid).set(login).then(() => {
                    this.setState({
                        nameUser: '',
                        cpfUser: '',
                        cellUser: '',
                        emailUser: '',
                        password: '',
                        confirmPassword: '',
                        nameSchool: '',
                        cepSchool: '',
                        streetSchool: '',
                        numberSchool: '',
                        neighborhoodSchool: '',
                        referenceSchool: '',
                        phoneSchool: '',
                        isLoading: false
                    })
                    alert('Cadastro realizado com sucesso!')
                    this.props.navigation.navigate('Home')
                }).catch((err) => {
                    alert(err)
                    console.error("Error found: ", err)
                    this.setState({
                        isLoading: false,
                    })
                })
            }).catch((error) => {
                alert(error)
                this.setState({
                    isLoading: false,
                })
            })
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loading />
            )
        }
        return (
            <ScrollView style={{ backgroundColor: "whitesmoke" }}>

                <Image
                    source={require('../assets/img/cdpc-circular.png')}
                    style={DefaultStyle.logo}
                ></Image>

                <Text style={Style.greetingRegister}>{`Insira seus dados pessoais e os dados da\n escola onde será entregue o experimento`}</Text>

                <View style={Style.form}>

                    <View>
                        <Text style={Style.title}>Informações de login</Text>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> E-mail</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='Digite o seu e-mail'
                            value={this.state.emailUser}
                            onChangeText={(val) => this.inputValueUpdate(val, 'emailUser')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Senha</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            secureTextEntry
                            autoCapitalize='none'
                            placeholder='Digite a sua senha para fazer login na plataforma'
                            value={this.state.password}
                            onChangeText={(val) => this.inputValueUpdate(val, 'password')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Confirme a senha</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            secureTextEntry
                            autoCapitalize='none'
                            placeholder='Digite sua senha novamente'
                            value={this.state.confirmPassword}
                            onChangeText={(val) => this.inputValueUpdate(val, 'confirmPassword')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={Style.title}>Dados pessoais</Text>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Nome completo</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='Digite o seu nome completo'
                            value={this.state.nameUser}
                            onChangeText={(val) => this.inputValueUpdate(val, 'nameUser')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> CPF</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='XXX.XXX.XXX-XX'
                            value={this.state.cpfUser}
                            onChangeText={(val) => this.inputValueUpdate(val, 'cpfUser')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Celular</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='(XX)XXXXX-XXXX'
                            value={this.state.cellUser}
                            onChangeText={(val) => this.inputValueUpdate(val, 'cellUser')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={Style.title}>Dados da escola</Text>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Nome</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='Digite o nome da escola'
                            value={this.state.nameSchool}
                            onChangeText={(val) => this.inputValueUpdate(val, 'nameSchool')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> CEP</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='Digite o cep da escola'
                            value={this.state.cepSchool}
                            onChangeText={(val) => this.inputValueUpdate(val, 'cepSchool')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Logradouro</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='Digite sua Rua ou Avenida'
                            value={this.state.streetSchool}
                            onChangeText={(val) => this.inputValueUpdate(val, 'streetSchool')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Número</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='Digite o número da sua residência'
                            value={this.state.numberSchool}
                            onChangeText={(val) => this.inputValueUpdate(val, 'numberSchool')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Bairro</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='Digite o seu bairro'
                            value={this.state.neighborhoodSchool}
                            onChangeText={(val) => this.inputValueUpdate(val, 'neighborhoodSchool')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={Style.inputTitle}>Ponto de referência</Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='Perto da igreja São Judas Tadeu'
                            value={this.state.referenceSchool}
                            onChangeText={(val) => this.inputValueUpdate(val, 'referenceSchool')}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: 'red' }}>*
                            <Text style={Style.inputTitle}> Telefone</Text>
                        </Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='(XX)XXXX-XXXX'
                            value={this.state.phoneSchool}
                            onChangeText={(val) => this.inputValueUpdate(val, 'phoneSchool')}>
                        </TextInput>
                    </View>

                </View>

                <TouchableOpacity
                    style={DefaultStyle.button}
                    onPress={() => this.storeUser()}>
                    <Text style={DefaultStyle.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
export default Register
