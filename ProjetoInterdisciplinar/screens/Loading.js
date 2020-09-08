import React from 'react'
import { Text, View, ActivityIndicator, Image } from 'react-native'

import LoadingStyle from '../styles/Loading'
import DefaultStyle from '../styles/DefaultStyle'

class Loading extends React.Component {
    render() {
        return (
            <View style={LoadingStyle.containerLoading}>
                
                <Image
                    source={require('../assets/img/cdpc-circular.png')}
                    style={DefaultStyle.logo}
                ></Image>
                
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        )
    }
}
export default Loading
