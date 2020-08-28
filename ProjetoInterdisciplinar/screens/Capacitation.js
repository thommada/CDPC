import React, { version } from 'react'
import { Text, ScrollView, TouchableOpacity, Linking} from 'react-native'
import Style from '../styles/CapacitationStyle'

class Capacitation extends React.Component {

    render(){
        return(
            <ScrollView style={Style.container}>
                <Text style={Style.title}>Capacitação - Disco Flutuante</Text>
                <Text style={Style.text}>Para realizar o empréstimo do FIS-Disco Flutuante, é necessário realizar um 
                treinamento de capacitação.</Text>
                <Text style={Style.text}>Basta estudar o conteúdo abaixo e realizar um teste no final.</Text>
                
                <Text style={Style.link}
                    onPress={() => Linking.openURL('https://americalatina.dint.fgv.br/sites/americalatina.dint.fgv.br/files/teste33.pdf')}>
                    {'\n\nTutorial\n\n'}
                </Text>

                <Text style={Style.link}
                    onPress={() => Linking.openURL('https://www.youtube.com/embed/umo8NxvyB8g')}>
                    {'\nTutorial em Video\n\n'}
                </Text>

                <TouchableOpacity style={Style.button}>
						<Text style={Style.buttonText}>Fazer o Teste</Text>
				</TouchableOpacity>   
            </ScrollView>                 
        )
    }
}
export default Capacitation