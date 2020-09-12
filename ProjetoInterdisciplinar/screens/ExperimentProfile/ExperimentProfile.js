import * as React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import DefaultStyle from '../../styles/DefaultStyle.js'

class ExperimentProfile extends React.Component {
	render() {
		const exp_title = this.props.navigation.getParam('exp_title', 'Experimento Genérico');
		const exp_resume = this.props.navigation.getParam('exp_resume', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' )
		return (
			<View style={DefaultStyle.container}>
				<Image
					source={require('../../assets/img/cdpc-circular.png')}
					style={DefaultStyle.logo}
				></Image>

				<Text style={DefaultStyle.textCenter}>{`Tela temporária para acessar os experimentos`}</Text>

				<TouchableOpacity style={DefaultStyle.button}
					onPress={() => this.props.navigation.navigate('FloatingDiskScreen')}
				>
					<Text style={DefaultStyle.buttonText}>Disco Flutuante</Text>
				</TouchableOpacity>

				<TouchableOpacity style={DefaultStyle.button}
					onPress={() => this.props.navigation.navigate('MotionEnergyScreen')}
				>
					<Text style={DefaultStyle.buttonText}>Energia de Movimento</Text>
				</TouchableOpacity>

				<TouchableOpacity style={DefaultStyle.button}
					onPress={() => this.props.navigation.navigate('EnergyConservationIScreen')}
				>
					<Text style={DefaultStyle.buttonText}>Conservação de Energia</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={DefaultStyle.button}
					onPress={() => this.props.navigation.navigate('GenericExperiment')}
				>
					<Text style={DefaultStyle.buttonText}>Experimento Genérico</Text>
				</TouchableOpacity> 
			</View>
		)
	}
}
export default ExperimentProfile
