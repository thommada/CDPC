import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import About from './About'
import ExperimentList from './ExperimentList'
import Login from './Login'
import ExperimentProfile from './ExperimentProfile'

import Style from '../styles/LoginRegister'

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{`Seja Bem vindo ao Portal do\n Centro de Divulgação e Popularização da Ciência (CDPC)`}</Text>

			<TouchableOpacity style={Style.button}
				onPress={() => navigation.navigate('AboutScreen')}
			>
				<Text style={Style.buttonText}>Saiba mais sobre o CDPC</Text>
			</TouchableOpacity>

			<TouchableOpacity style={Style.button}
				onPress={() => navigation.navigate('ExperimentListScreen')}
			>
				<Text style={Style.buttonText}>Experimentoteca</Text>
			</TouchableOpacity>

			<TouchableOpacity style={Style.button}
				onPress={() => navigation.navigate('LoginScreen')}
			>
				<Text style={Style.buttonText}>Tela de Login</Text>
			</TouchableOpacity>

			<TouchableOpacity style={Style.button}
				onPress={() => navigation.navigate('ExperimentProfileScreen')}
			>
				<Text style={Style.buttonText}>Perfil do Experimento</Text>
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
				<Stack.Screen name="LoginScreen" component={Login} options={{ title: 'Login' }} />
				<Stack.Screen name="ExperimentProfileScreen" component={ExperimentProfile} options={{ title: 'Tela de Experimentos' }} />
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