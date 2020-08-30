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

class EnergyConservationI extends React.Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: "whitesmoke" }}>

				<View>
					<Slider images={images} />
				</View>

				<View style={{ marginHorizontal: 15, marginTop: 25 }}>
					<Text style={Style.subtitle}>Objetivo</Text>
					<Text style={Style.text}>Mostrar a transformação da Energia Potencial Gravitacional em Energia Cinética, ilustrando a Conservação da Energia Mecânica.</Text>

					<Text style={Style.subtitle}>Contexto</Text>
					<Text style={Style.text}>O Princípio da Conservação da Energia diz que " a energia pode ser transformada ou transferida, mas nunca criada ou destruída".
					Em um determinado sistema mecânico, em que formas de energia relacionadas a fenômenos eletromagnéticos ou fenômenos térmicos não estão presentes, pode-se dizer que a energia total do sistema é puramente mecânica. Desse modo, o Princípio da Conservação da Energia implica a conservação da energia mecânica. Esta, por sua vez, é a soma das quantidades de energia potencial e energia cinética. Embora a energia mecânica seja sempre constante, a quantidade de cada uma de suas componentes pode sofrer variação, de tal modo que a energia total permaneça constante.
                        Neste experimento podemos identificar uma transformação de um tipo de energia em outro. Inicialmente um objeto possui energia potencial gravitacional, que é a energia de interação entre a massa do objeto com a massa da Terra. Essa energia está armazenada no sistema Terra-objeto, e a energia vai diminuindo à medida que o objeto e a Terra se aproximam. A energia potencial gravitacional de um objeto, que é diretamente proporcional ao produto da sua massa, da aceleração da gravidade (g) e da sua distância vertical em relação a um ponto de referência,  se transforma em energia cinética do objeto, que está associada ao seu movimento. A energia cinética é diretamente proporcional à massa e ao quadrado da velocidade do objeto.</Text>

					<Text style={Style.subtitle}>Materiais</Text>
					<Text style={Style.text}>{`a) 2 tampinhas plásticas de refrigerante\nb) 2 réguas de 30cm\nc) Fita adesiva\nd) Copo Plástico\ne) Suporte\nf) Bolinhas`}</Text>

					<Text style={Style.subtitle}>Capacitação</Text>
					<Text style={Style.text}>Sim, o empréstimo será realizado após a conclusão do treinamento.</Text>

					<Text style={Style.subtitle}>Mais Detalhes</Text>
					<TouchableOpacity
						onPress={() => Linking.openURL('https://drive.google.com/file/d/1ozSHuYnsNxYT6Uv3gY-UJUqFmzUivQP_/view?usp=sharing')}
					>
						<Text style={DefaultStyle.link}>ConservacaodeEnergiaI.pdf</Text>
					</TouchableOpacity>

					<TouchableOpacity style={DefaultStyle.button}>
						<Text style={DefaultStyle.buttonText}>Realizar Empréstimo</Text>
					</TouchableOpacity>
				</View>

			</ScrollView>
		)
	}
}
export default EnergyConservationI
