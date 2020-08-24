import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Button} from 'react-native';
import Slider from '../components/Slider';

const images = [
  require('../img/fotoex1.png'),
  require('../img/fotoex2.png'),
  require('../img/fotoex3.png')
]

const handlePress = () => false

export default function App (){
    return(
      <View style={{flex:1}}>
      <View style={styles.header}>
        <Image 
        style={styles.leftimg}
        source={require('../img/voltar.png')}
        />
        <Text style={{textAlign:"center"}}>Perfil do Experimento</Text>
        <Image 
        style={styles.rightimg}
        source={require('../img/logo.png')}
        />
      </View>
      <View style={{flex:0.4,backgroundColor: '#C0C0C0'}}>
        <Slider images={images}/>
      </View>
      <View style={{flex:0.1,backgroundColor: '#C0C0C0'}}>
        <Text style={styles.texto}> Objetivo</Text>
        <Text style= {{marginLeft:20, marginBottom: 5}}> Mostrar a influência que o atrito exerce sobre o movimento de um objeto.</Text>
      </View>
      <View style={{flex:0.1,backgroundColor: '#C0C0C0'}}>
        <Text style={styles.texto}> Detalhes</Text>
        <Text style={{color:'blue', marginLeft:20}}>PênduloFlutuante.pdf</Text>
      </View>
      <View style={{flex:0.1,backgroundColor: '#C0C0C0'}}>
        <Text style={styles.texto}> Capacitação</Text>
        <Text style={{marginLeft:20, marginBottom: 5}}> Sim, o empréstimo será realizado após a conclusão do treinamento</Text>
      </View>
      <View style={{flex:0.15,backgroundColor: '#C0C0C0'}}>
      <Button
          size="large"
          onPress = {handlePress}
          title = "Realizar empréstimo"
          color = "green"
        />
      </View>
      <StatusBar style="auto" />
    </View>
    )
  }

const styles = StyleSheet.create({
  header:{
    flex:0.15, 
    backgroundColor: '#d3d3d3',
    alignItems:'center',
    justifyContent:'center'
  },

  rightimg:{
    position:'absolute',
    right:20
  },

  leftimg:{
    position:'absolute',
    left:20
  },

  container: {
    marginTop: 50
  },
  texto:{
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  }
});
