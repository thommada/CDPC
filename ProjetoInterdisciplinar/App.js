// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExperimentList from './screens/ExperimentList';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Seja Bem vindo ao Potal do Centro de Divulgação e Popularização da Ciência (CDPC)</Text>
      <Button
        title="Saiba mais sobre o CDPC"
      />
      <Button
        title="Experimentoteca"
        onPress={() => navigation.navigate('ExperimentoListScreen')}
      />
      <Button
        title="outro"
      />
      <Button
        title="outro"
      />
      <Button
        title="outro"
      />
    </View>
  );
}

function ExperimentoListScreen() {
  return (
    <ExperimentList></ExperimentList>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={HomeScreen} />
        <Stack.Screen name="ExperimentoListScreen" component={ExperimentoListScreen} options={{ title: 'Lista de Experimentos' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
