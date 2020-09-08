import React from 'react';
import { Text, View, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import Style from '../styles/ExperimentListStyle';
import DefaultStyle from '../styles/DefaultStyle';

const experimentos = [
    {   
        titulo: "Física",
        data: [
        { id: 101, title: 'Disco Flutuantes',  screen: 'FloatingDiskScreen'},
        { id: 102, title: 'Energia de Movimento',  screen: 'MotionEnergyScreen' },
        { id: 103, title: 'Conservação de Energia',  screen: 'EnergyConservationIScreen' },
    ]},
    {   
        titulo: "Química",
        data: [
        { id: 201, title: 'Ácido-Base',  screen: 'GenericExperiment' },
        { id: 202, title: 'Soluçao Tampão',  screen: 'GenericExperiment' },
    ]},
    {
        titulo: "Biologia",
        data : [
        { id: 301, title: 'Deterioração do Plástico',  screen: 'GenericExperiment' },
        { id: 302, title: 'Digestão',  screen: 'GenericExperiment' },
    ]},
    {
        titulo: "Microbiologia",
        data : [
        { id: 401, title: 'Bacterias', screen: 'GenericExperiment'},
    ]},
    {
        titulo: "Disciplina",
        data : [
        { id: 501, title: 'Nome do Experimento', screen: 'GenericExperiment'},
        { id: 601, title: 'Nome do Experimento (só que grande como exemplo)', screen: 'GenericExperiment'},
    ]},
]
export default class ExperimentList extends React.Component {
    render() {
        return (
            <View style={DefaultStyle.container}>
                <View style={Style.boxtitle}>
                    <Text style={Style.title}>Lista de Experimentos</Text>
                </View>
                <SafeAreaView style={Style.box}>
                    <SectionList
                        sections={experimentos}
                        keyExtractor={(item, index ) => item + index}
                        renderItem={({ item }) => (
                            <View style={Style.boxtext}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(item.screen)}>
                                    <Text style={Style.text}>
                                        ID: {item.id}: {item.title}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        renderSectionHeader={({ section: {titulo} }) => (
                            <View style={Style.boxheader}>
                                <Text style={Style.header}>
                                    {titulo}
                                </Text>
                            </View>
                        )}
                        
                    />
                </SafeAreaView>
            </View>

        )
    }
}