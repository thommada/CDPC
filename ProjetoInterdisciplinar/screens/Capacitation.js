import React from 'react'
import { Text, ScrollView, TouchableOpacity, Linking } from 'react-native'

import Style from '../styles/CapacitationStyle'
import DefaultStyle from '../styles/DefaultStyle'

class Capacitation extends React.Component {
    render() {
        const { title, pdfTuto, videoTuto}  = this.props.route.params;
        return (
            <ScrollView style={{ backgroundColor: "whitesmoke" }}>

                <Text style={DefaultStyle.title}>{title}</Text>

                <Text style={DefaultStyle.text}>Para realizar o empréstimo deste experimento, é necessário realizar um
                treinamento de capacitação.</Text>

                <Text style={DefaultStyle.text}>Basta estudar o conteúdo abaixo e realizar um teste no final.</Text>

                <Text style={Style.linkCenter}
                    onPress={() => Linking.openURL(pdfTuto)}>
                    {'Baixar tutorial em .pdf'}
                </Text>

                <Text style={Style.linkCenter}
                    onPress={() => Linking.openURL(videoTuto)}>
                    {'Assistir vídeo tutorial'}
                </Text>

                <TouchableOpacity style={DefaultStyle.button} onPress={() => alert("Um email com mais informações será enviado para seu email cadastrado")}>
                    <Text style={DefaultStyle.buttonText}>Fazer o Teste</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
export default Capacitation