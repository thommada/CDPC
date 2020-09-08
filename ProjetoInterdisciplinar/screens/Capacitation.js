import React from 'react'
import { Text, ScrollView, TouchableOpacity, Linking } from 'react-native'

import Style from '../styles/CapacitationStyle'
import DefaultStyle from '../styles/DefaultStyle'

class Capacitation extends React.Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: "whitesmoke" }}>

                <Text style={DefaultStyle.title}>Disco Flutuante</Text>

                <Text style={DefaultStyle.text}>Para realizar o empréstimo do FIS-Disco Flutuante, é necessário realizar um
                treinamento de capacitação.</Text>

                <Text style={DefaultStyle.text}>Basta estudar o conteúdo abaixo e realizar um teste no final.</Text>

                <Text style={Style.linkCenter}
                    onPress={() => Linking.openURL('https://americalatina.dint.fgv.br/sites/americalatina.dint.fgv.br/files/teste33.pdf')}>
                    {'Baixar tutorial em .pdf'}
                </Text>

                <Text style={Style.linkCenter}
                    onPress={() => Linking.openURL('https://www.youtube.com/embed/umo8NxvyB8g')}>
                    {'Assistir vídeo tutorial'}
                </Text>

                <TouchableOpacity style={DefaultStyle.button}>
                    <Text style={DefaultStyle.buttonText}>Fazer o Teste</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
export default Capacitation