import React from 'react'
import { Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'

import DefaultStyle from '../styles/DefaultStyle'

import firebase from '../components/firebase/config'
import { Button } from 'react-native-paper'

class Home extends React.Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: "whitesmoke", marginTop: 50 }}>
				<Image
					source={require('../assets/img/cdpc-circular.png')}
					style={DefaultStyle.logo}
				></Image>

				<Text style={DefaultStyle.textCenter}>{`Seja Bem vindo (a) ao Portal do\n Centro de Divulgação e Popularização da Ciência`}</Text>

				<TouchableOpacity style={DefaultStyle.button}
					onPress={() => this.props.navigation.navigate('AboutScreen')}
				>
					<Text style={DefaultStyle.buttonText}>Saiba mais sobre o CDPC</Text>
				</TouchableOpacity>

				<TouchableOpacity style={DefaultStyle.button}
					onPress={() => this.props.navigation.navigate('ExperimentListScreen')}
				>
					<Text style={DefaultStyle.buttonText}>Experimentoteca</Text>
				</TouchableOpacity>

				<TouchableOpacity style={DefaultStyle.button}
					onPress={() => this.props.navigation.navigate('AstronomyScreen')}
				>
					<Text style={DefaultStyle.buttonText}>Grupo Astronomia (G-DAI)</Text>
				</TouchableOpacity>

				<TouchableOpacity style={DefaultStyle.button}
					onPress={() => this.props.navigation.navigate('CapacitationScreen')}
				>
					<Text style={DefaultStyle.buttonText}>Capacitação</Text>
				</TouchableOpacity>
			</ScrollView>
		)
	}
}
export default Home