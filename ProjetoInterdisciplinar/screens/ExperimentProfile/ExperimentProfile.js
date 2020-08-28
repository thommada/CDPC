import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import DefaultStyle from '../../styles/DefaultStyle.js'

class ExperimentProfile extends React.Component {
	render() {
        return (
            <View style={DefaultStyle.container}>
			<Image
                source={require('../../assets/img/cdpc-circular.png')}
                style={DefaultStyle.logo}
            ></Image>

			<Text style={styles.text}>{`Tela temporária para acessar os experimentos`}</Text>

			<TouchableOpacity style={DefaultStyle.button}
				onPress={() => this.props.navigation.navigate('FloatingDiscScreen')}
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
		</View>
        )
    }
}

export default ExperimentProfile

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 10
	},
	text: {
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 20
	},
	button: {
		backgroundColor: "#228B22",
		borderRadius: 4,
		height: 52,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: 'white',
		fontWeight: '500'
	},
})
