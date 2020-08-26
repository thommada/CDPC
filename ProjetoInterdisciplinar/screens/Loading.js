import React from 'react'
import { Text, View, ActivityIndicator, Image } from 'react-native'

import Style from '../styles/Loading'
import DefaultStyle from '../styles/DefaultStyle'

class Loading extends React.Component {
    render() {
        return (
            <View style={DefaultStyle.containerCenter}>

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




