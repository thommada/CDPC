import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import About from '../screens/About'
import ExperimentList from '../screens/ExperimentList'
import Login from '../screens/Login'
import Astronomy from '../screens/Astronomy'
import Register from '../screens/Register'
import Capacitation from '../screens/Capacitation'
import FloatingDisk from '../screens/ExperimentProfile/Fisica/FloatingDisk'
import EnergyConservationI from '../screens/ExperimentProfile/Fisica/EnergyConservationI'
import MotionEnergy from '../screens/ExperimentProfile/Fisica/MotionEnergy'
import GenericExperiment from '../screens/ExperimentProfile/GenericExperiment'

const Stack = createStackNavigator()
class MyStack extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="AboutScreen" component={About} options={{ title: 'Sobre o CDPC' }} />
                <Stack.Screen name="ExperimentListScreen" component={ExperimentList} options={{ title: 'Experimentoteca' }} />
                <Stack.Screen name="AstronomyScreen" component={Astronomy} options={{ title: 'G-DAI' }} />
                <Stack.Screen name="Register" component={Register} options={{ title: 'Registre-se' }} />
                <Stack.Screen name="CapacitationScreen" component={Capacitation} options={{ title: 'Capacitação' }} />
                <Stack.Screen name="FloatingDiskScreen" component={FloatingDisk} options={{ title: 'Disco Flutuante' }} />
                <Stack.Screen name="MotionEnergyScreen" component={MotionEnergy} options={{ title: 'Energia de Movimento' }} />
                <Stack.Screen name="EnergyConservationIScreen" component={EnergyConservationI} options={{ title: 'Conservação de Energia' }} />
                <Stack.Screen name="GenericExperiment" component={GenericExperiment} options={{ title: 'Experimento Genérico' }} />
            </Stack.Navigator>
        )
    }
}
export default MyStack
	