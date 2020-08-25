import React from 'react'
import { Text, View, ActivityIndicator, Image } from 'react-native'
import Style from '../styles/Loading'

class Loading extends React.Component {
    render() {
        return (
            <View style={Style.container}>

                <Image
                    source={require('../assets/img/cdpc-circular.png')}
                    style={Style.logo}
                ></Image>

                <Text style={Style.loading}>Carregando...</Text>
                <ActivityIndicator size='large'></ActivityIndicator>

            </View>
        )
    }
}
export default Loading




