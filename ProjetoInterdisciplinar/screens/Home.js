import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import About from './About'
import ExperimentList from './ExperimentList'
import Login from './Login'
import Astronomy from '../screens/Astronomy'
import Register from './Register'
import Capacitation from './Capacitation'
import FloatingDisk from './ExperimentProfile/Fisica/FloatingDisk'
import EnergyConservationI from '../screens/ExperimentProfile/Fisica/EnergyConservationI'
import MotionEnergy from '../screens/ExperimentProfile/Fisica/MotionEnergy'
import GenericExperiment from '../screens/ExperimentProfile/GenericExperiment'
import DefaultStyle from '../styles/DefaultStyle'

function HomeScreen({ navigation }) {
	return (
		<ScrollView style={{ backgroundColor: "whitesmoke", marginTop: 50 }}>
			<Image
				source={require('../assets/img/cdpc-circular.png')}
				style={DefaultStyle.logo}
			></Image>

			<Text style={DefaultStyle.textCenter}>{`Seja Bem vindo (a) ao Portal do\n Centro de Divulgação e Popularização da Ciência`}</Text>

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
				onPress={() => navigation.navigate('AstronomyScreen')}
			>
				<Text style={DefaultStyle.buttonText}>Grupo Astronomia (G-DAI)</Text>
			</TouchableOpacity>

			<TouchableOpacity style={DefaultStyle.button}
				onPress={() => navigation.navigate('CapacitationScreen')}
			>
				<Text style={DefaultStyle.buttonText}>Capacitação</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
				<Stack.Screen name="AboutScreen" component={About} options={{ title: 'Sobre o CDPC'}} />
				<Stack.Screen name="ExperimentListScreen" component={ExperimentList} options={{ title: 'Experimentoteca' }} />
				<Stack.Screen name="LoginScreen" component={Login} options={{ title: 'Login' }} />
				<Stack.Screen name="GenericExperiment" component={GenericExperiment} options={{ title: 'Experimento Genérico' }} />
				<Stack.Screen name="AstronomyScreen" component={Astronomy} options={{ title: 'G-DAI' }} />
				<Stack.Screen name="Register" component={Register} options={{ title: 'Registre-se' }} />
				<Stack.Screen name="CapacitationScreen" component={Capacitation} options={{ title: 'Capacitação' }} />
				<Stack.Screen name="FloatingDiskScreen" component={FloatingDisk} options={{ title: 'Disco Flutuante' }} />
				<Stack.Screen name="MotionEnergyScreen" component={MotionEnergy} options={{ title: 'Energia de Movimento' }} />
				<Stack.Screen name="EnergyConservationIScreen" component={EnergyConservationI} options={{ title: 'Conservação de Energia' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;