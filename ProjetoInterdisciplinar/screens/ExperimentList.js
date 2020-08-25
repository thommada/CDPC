import React from 'react'
import { Text, View } from 'react-native'
import Style from '../styles/ExperimentListStyle'

class ExperimentList extends React.Component {
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.boxtitle}>
                    <Text style={Style.title}>Lista de Experimentos</Text>
                </View>
                <View style={Style.box}>
                    <Text style={Style.subtitle}>Corpo</Text>
                    
                </View>
            </View>
        )
    }
}
export default ExperimentList