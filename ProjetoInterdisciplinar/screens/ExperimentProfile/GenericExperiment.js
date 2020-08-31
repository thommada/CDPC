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

class GenericExperiment extends React.Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: "whitesmoke" }}>

				<View>
					<Slider images={images} />
				</View>

				<View style={{ marginHorizontal: 15, marginTop: 25 }}>
					<Text style={Style.subtitle}>Objetivo</Text>
					<Text style={Style.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </Text>

					<Text style={Style.subtitle}>Contexto</Text>
					<Text style={Style.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu erat, posuere scelerisque diam nec, dapibus dignissim massa. 
                        Donec eu semper quam. Donec aliquet vel est vel euismod. Ut pharetra tincidunt quam, interdum venenatis lorem scelerisque quis. 
                        Curabitur vitae finibus quam. Cras mollis consequat quam nec accumsan. Nulla at consectetur ipsum. In quis est neque.
                     </Text>

					<Text style={Style.subtitle}>Materiais</Text>
					<Text style={Style.text}>{`a) Item 1\nb) Item 2\nc) Item 3\nd) Item 4\ne) Item 5\nf) Item 6`}</Text>

					<Text style={Style.subtitle}>Capacitação</Text>
					<Text style={Style.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>

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
export default GenericExperiment;
