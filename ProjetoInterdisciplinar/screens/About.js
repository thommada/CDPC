import React from 'react'
import { Text, View,  Image } from 'react-native'

import DefaultStyle from '../styles/DefaultStyle'

class About extends React.Component {
    render() {
        return (
            <View style={DefaultStyle.containerCenter}>
                <Text>Sobre o CDPC</Text>
            </View>
        )
    }
}
export default About
