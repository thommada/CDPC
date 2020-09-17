import React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native'

import Loading from '../screens/Loading'
import Style from '../styles/LoginRegister'
import DefaultStyle from '../styles/DefaultStyle'

import firebase from '../components/firebase/config'

class Login extends React.Component {
    constructor() {
        super()

        this.dbRef = firebase.firestore().collection('users')

        this.state = {
            emailUser: '',
            password: '',
            isLoading: false
        }
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state
        state[prop] = val
        this.setState(state)
    }

    onLoginPress() {
        if (this.state.emailUser === '') {
            Alert.alert(
                'Informações de login',
                "O campo 'E-mail' é obrigatório!",
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed')
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
                        onPress: () => console.log('OK Pressed')
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

            firebase.auth().signInWithEmailAndPassword(this.state.emailUser, this.state.password).then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef.doc(uid).get().then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("Este usuário não existe")
                        this.setState({
                            isLoading: false,
                        })
                    }
                    alert("Login realizado com sucesso!\nSeja bem vindo (a)")
                    this.props.navigation.navigate('Home')
                    this.setState({
                        isLoading: false,
                    })
                }).catch(error => {
                    this.setState({
                        isLoading: false,
                    })
                    alert(error)
                })
            }).catch(error => {
                this.setState({
                    isLoading: false,
                })
                alert(error)
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
            <View style={DefaultStyle.container}>

                <Image
                    source={require('../assets/img/cdpc-circular.png')}
                    style={DefaultStyle.logo}
                ></Image>

                <Text style={Style.greetingLogin}>{`Seja bem vindo (a)\nao aplicativo do CDPC`}</Text>

                <View style={Style.form}>
                    <View>
                        <Text style={Style.inputTitle}>E-mail</Text>
                        <TextInput
                            style={Style.input}
                            autoCapitalize='none'
                            placeholder='Digite o seu e-mail'
                            value={this.state.emailUser}
                            onChangeText={(val) => this.inputValueUpdate(val, 'emailUser')}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={Style.inputTitle}>Senha</Text>
                        <TextInput
                            style={Style.input}
                            secureTextEntry autoCapitalize='none'
                            placeholder='Digite a sua senha'
                            value={this.state.password}
                            onChangeText={(val) => this.inputValueUpdate(val, 'password')}>
                        </TextInput>
                    </View>
                </View>

                <TouchableOpacity
                    style={DefaultStyle.button}
                    onPress={() => this.onLoginPress()}
                >
                    <Text style={DefaultStyle.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: 'center', marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={Style.text}>
                        É novo no CDPC? <Text style={Style.registerText}>Faça seu cadastro</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
export default Login