import React from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Slider from '../../components/Slider'

import Style from '../../styles/Experiment'
import DefaultStyle from '../../styles/DefaultStyle'

const images = [
	require('../../assets/img/fotoex1.png'),
	require('../../assets/img/fotoex2.png'),
	require('../../assets/img/fotoex3.png')
]

class ExperimentProfile extends React.Component {
	render() {
		return (
			<ScrollView style={{backgroundColor: "whitesmoke"}}>

				<Text style={Style.title}>Disco Flutuante</Text>

				<View>
					<Slider images={images} />
				</View>

				<View style={{ marginHorizontal: 15, marginTop: 25 }}>
					<Text style={Style.subtitle}>Objetivo</Text>
					<Text style={Style.text}>Mostrar a influência que o atrito exerce sobre o movimento de um objeto.</Text>

					<Text style={Style.subtitle}>Contexto</Text>
					<Text style={Style.text}>O Princípio da Inércia, ou Primeira Lei de Newton, diz que "um objeto tende sempre a manter o seu estado de movimento, este podendo também ser o de repouso, se não houver a ação de forças externas". E o atrito, ou melhor, as forças de atrito, são na maioria dos casos, as responsáveis pelo fato de que não se observa comumente um objeto se deslocando continuamente sem a ação de uma outra força propulsora.</Text>

					<Text style={Style.subtitle}>Materiais</Text>
					<Text style={Style.text}>{`a) Papelão\nb) Cartolina\nc) Caneta esferográfica\nd) Bexiga\ne) Fita Adesiva\nf) Cola`}</Text>

					<Text style={Style.subtitle}>Capacitação</Text>
					<Text style={Style.text}>Sim, o empréstimo será realizado após a conclusão do treinamento.</Text>

					<Text style={Style.subtitle}>Mais Detalhes</Text>
					<TouchableOpacity>
						<Text style={Style.textPDF}>PênduloFlutuante.pdf</Text>
					</TouchableOpacity>

					<TouchableOpacity style={DefaultStyle.button}>
						<Text style={DefaultStyle.buttonText}>Realizar Empréstimo</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
	}
}
export default ExperimentProfile
