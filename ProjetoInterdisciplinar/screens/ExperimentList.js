import React from 'react';
import { Text, View, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import Style from '../styles/ExperimentListStyle';
import DefaultStyle from '../styles/DefaultStyle';

const physics = [
    { id: 101, title: 'Disco Flutuantes',  screen: 'FloatingDiskScreen'},
    { id: 102, title: 'Energia de Movimento',  screen: 'MotionEnergyScreen' },
    { id: 103, title: 'Conservação de Energia',  screen: 'EnergyConservationIScreen' },
]
const chemistry = [
    { id: 201, title: 'Ácido-Base',  screen: 'Genericexperiment' },
    { id: 202, title: 'Soluçao Tampão',  screen: 'GenericExperiment' },
]
const biology = [
    { id: 301, title: 'Deterioração do Plástico',  screen: 'GenericExperiment' },
    { id: 302, title: 'Digestão',  screen: 'GenericExperiment' },
]
const microbiology = [
    { id: 401, title: 'Bacterias', screen: 'GenericExperiment'},
]
const disciplina = [
    { id: 501, title: 'Nome do Experimento', screen: 'GenericExperiment'},
    { id: 601, title: 'Nome do Experimento (só que grande como exemplo)', screen: 'GenericExperiment'},
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
                        sections={[
                            { title: "Física", data: physics },
                            { title: "Química", data: chemistry },
                            { title: "Biologia", data: biology },
                            { title: "Microbiologia", data: microbiology },
                            { title: "Disciplina", data: disciplina},
                        ]}
                        renderItem={({ item }) => (
                            <View style={Style.boxtext}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(item.screen)}>
                                    <Text style={Style.text}>
                                        ID: {item.id}: {item.title}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        renderSectionHeader={({ section }) => (
                            <View style={Style.boxheader}>
                                <Text style={Style.header}>
                                    {section.title}
                                </Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </SafeAreaView>
            </View>

        )
    }
}