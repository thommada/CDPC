import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import About from './About'
import ExperimentList from './ExperimentList'
import Login from './Login'
import ExperimentProfile from '../screens/ExperimentProfile/ExperimentProfile'
import Register from './Register'
import Capacitation from './Capacitation'
import FloatingDisc from '../screens/ExperimentProfile/Fisica/FloatingDisc'
import EnergyConservationI from '../screens/ExperimentProfile/Fisica/EnergyConservationI'
import MotionEnergy from '../screens/ExperimentProfile/Fisica/MotionEnergy'

import DefaultStyle from '../styles/DefaultStyle'

function HomeScreen({ navigation }) {
	return (
		<View style={DefaultStyle.container}>
			<Image
                source={require('../assets/img/cdpc-circular.png')}
                style={DefaultStyle.logo}
            ></Image>

			<Text style={styles.text}>{`Seja Bem vindo (a) ao Portal do\n Centro de Divulgação e Popularização da Ciência`}</Text>

			<TouchableOpacity style={DefaultStyle.button}
				onPress={() => navigation.navigate('AboutScreen')}
			>
				<Text style={DefaultStyle.buttonText}>Saiba mais sobre o CDPC</Text>
			</TouchableOpacity>

			<TouchableOpacity style={DefaultStyle.button}
				onPress={() => navigation.navigate('ExperimentListScreen')}
			>
				<Text style={DefaultStyle.buttonText}>Experimentoteca</Text>
			</TouchableOpacity>

			<TouchableOpacity style={DefaultStyle.button}
				onPress={() => navigation.navigate('LoginScreen')}
			>
				<Text style={DefaultStyle.buttonText}>Tela de Login</Text>
			</TouchableOpacity>

			<TouchableOpacity style={DefaultStyle.button}
				onPress={() => navigation.navigate('ExperimentProfileScreen')}
			>
				<Text style={DefaultStyle.buttonText}>Perfil do Experimento</Text>
			</TouchableOpacity>

			<TouchableOpacity style={DefaultStyle.button}
				onPress={() => navigation.navigate('CapacitationScreen')}
			>
				<Text style={DefaultStyle.buttonText}>Capacitação</Text>
			</TouchableOpacity>
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Principal" component={HomeScreen} />
				<Stack.Screen name="AboutScreen" component={About} options={{ title: 'Sobre o CDPC' }} />
				<Stack.Screen name="ExperimentListScreen" component={ExperimentList} options={{ title: 'Lista de Experimentos' }} />
				<Stack.Screen name="LoginScreen" component={Login} options={{ title: 'Faça o seu Login' }} />
				<Stack.Screen name="ExperimentProfileScreen" component={ExperimentProfile} options={{ title: 'Perfil do Experimento' }} />
				<Stack.Screen name="Register" component={Register} options={{ title: 'Registre-se' }} />
				<Stack.Screen name="CapacitationScreen" component={Capacitation} options={{ title: 'Capacitação' }} />
				<Stack.Screen name="FloatingDiscScreen" component={FloatingDisc} options={{ title: 'Disco Flutuante' }} />
				<Stack.Screen name="MotionEnergyScreen" component={MotionEnergy} options={{ title: 'Energia de Movimento' }} />
				<Stack.Screen name="EnergyConservationIScreen" component={EnergyConservationI} options={{ title: 'Conservação de Energia' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

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
});
