import React from 'react'
import { Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'
import Slider from '../../../components/Slider'

import Style from '../../../styles/Experiment'
import DefaultStyle from '../../../styles/DefaultStyle'

const images = [
	require('../../../assets/img/fotoex1.png'),
	require('../../../assets/img/fotoex2.png'),
	require('../../../assets/img/fotoex3.png')
]

class MotionEnergy extends React.Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: "whitesmoke" }}>

				<Text style={DefaultStyle.title}>Energia de Movimento</Text>

				<View>
					<Slider images={images} />
				</View>

				<View style={{ marginHorizontal: 15, marginTop: 25 }}>
					<Text style={Style.subtitle}>Objetivo</Text>
					<Text style={Style.text}>Ilustrar o conceito de Energia Cinética.</Text>

					<Text style={Style.subtitle}>Contexto</Text>
					<Text style={Style.text}>O Princípio da Conservação da Energia diz que " a energia pode ser transformada ou transferida, mas nunca criada ou destruída". A energia cinética é a forma de energia que esta associada à quantidade de movimento de um objeto. Ou seja, ela só existe quando o objeto possui velocidade em relação a um determinado ponto de referência. No dia-a-dia podemos fazer várias verificações de transformações de outras formas de energia em energia cinética, como: a energia acumulada no combustível é transformada em energia de movimento de um carro; a energia elétrica é transformada em energia cinética em aparelhos como ventilador, liquidificador,furadeira, etc. No lançamento de um pião, a pessoa que puxa a cordinha transfere energia para o pião, que a reterá como energia cinética (de rotação) e, em seguida, transferirá para o ambiente, principalmete como agitação térmica do ar (energia cinética) e atrito com o piso. A massa do objeto também influi na quantidade de sua energia cinética, de tal forma que , quanto mais massa, para uma velocidade fixa, maior a quantidade de energia cinética. A energia cinética é diretamente proporcional à massa e ao quadrado da velocidade do objeto.</Text>

					<Text style={Style.subtitle}>Materiais</Text>
					<Text style={Style.text}>{`a) Massa de modelar\nb) Régua\nc) Bolinhas`}</Text>

					<Text style={Style.subtitle}>Capacitação</Text>
					<Text style={Style.text}>Sim, o empréstimo será realizado após a conclusão do treinamento.</Text>

					<Text style={Style.subtitle}>Mais Detalhes</Text>
					<TouchableOpacity
						onPress={() => Linking.openURL('https://drive.google.com/file/d/1gUem9hCdKPy-mMZhmJYFp7I2yH_Egf_h/view?usp=sharing')}
					>
						<Text style={DefaultStyle.link}>PenduloFlutuante.pdf</Text>

					</TouchableOpacity>

					<TouchableOpacity style={DefaultStyle.button}>
						<Text style={DefaultStyle.buttonText}>Realizar Empréstimo</Text>
					</TouchableOpacity>
				</View>

			</ScrollView>
		)
	}
}
export default MotionEnergy
