import React from 'react'
import { Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'
import Slider from '../../components/Slider'

import Style from '../../styles/Experiment'
import DefaultStyle from '../../styles/DefaultStyle'

const images = [
	require('../../assets/img/fotoex1.png'),
	require('../../assets/img/fotoex2.png'),
	require('../../assets/img/fotoex3.png')
]
const verifyCapacitation = (verification) =>{
	if (verification){
		return 'Precisa de Qualificação'
	}
	return 'NÃO Precisa de Qualificação'

}

class Experiment extends React.Component{
	render() {
		const { exp_title, exp_resume, exp_discip, exp_qualification, exp_details}  = this.props.route.params;
		return (
			<ScrollView style={{ backgroundColor: "whitesmoke" }}>

				<View>
					<Slider images={images} />
				</View>

				<View style={{ marginHorizontal: 15, marginTop: 25 }}>
					<Text style={Style.subtitle}>Experimento</Text>
					<Text style={Style.text}>{exp_title}</Text>

					<Text style={Style.subtitle}>Objetivo</Text>
					<Text style={Style.text}>{exp_resume}</Text>

					<Text style={Style.subtitle}>Capacitação</Text>
					<Text style={Style.text}>
                        {verifyCapacitation(exp_qualification)}
                    </Text>

					<Text style={Style.subtitle}>Mais Detalhes</Text>
					<TouchableOpacity
						onPress={() => Linking.openURL({exp_details})}
					>
						<Text style={DefaultStyle.link}>{exp_title}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={DefaultStyle.button}>
						<Text style={DefaultStyle.buttonText}>Realizar Empréstimo</Text>
					</TouchableOpacity>
				</View>

			</ScrollView>
		)
	}
}
export default Experiment
