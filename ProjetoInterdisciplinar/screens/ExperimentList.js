import React from 'react';
import { Text, View, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import Style from '../styles/ExperimentListStyle';
import DefaultStyle from '../styles/DefaultStyle';

const physics = [
    {id: 101, title:'Disco Flutuante'},
    {id: 102, title:'Conservação de Energia'},
    {id: 103, title:'Energia Cinética'},
]
const chemistry = [
    {id: 201, title:'Ácido-Base'},
    {id: 202, title:'Soluçao Tampão'},
]
const biology = [
    {id: 301, title:'Deterioração do Plástico'},
    {id: 302, title:'Digestão'},
]
const microbiology = [
    {id: 401, title:'Bacterias'},
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
                        sections = {[
                            {title: "Física", data: physics},
                            {title: "Química", data: chemistry},
                            {title: "Biologia", data: biology},
                            {title: "Microbiologia", data: microbiology},
                        ]}
                        renderItem= {( {item}) =>(
                            <View>
                                <Text style={Style.text}>
                                    {item.title}
                                </Text>
                            </View>
                        )}
                        renderSectionHeader= {({section}) => (
                            <View>
                                <Text style={Style.header}>
                                    {section.title}
                                </Text>
                            </View>
                        )}
                        keyExtractor={ (item) => item.id}
                    />
                </SafeAreaView>
            </View>
            
        )
    }
}

const CONTENT = [
    {
        title: 'Física',
        data: [, 'Energia de Movimento', 'Conservação de Energia'],
    },
    {
        title: 'Química',
        data: ['Solução Tampão', 'Ácido-base'],
    },
    {
        title: 'Biologia',
        data: ['Deterioração do Plástico', 'Digestão'],
    },
    {
        title: 'História',
        data: ['Segunda Guerra Mundial', 'Guerra Fria',],
    },
    {
        title: 'Geografia',
        data: ['Montanhas'],
    },
    {
        title: 'Eletrônica Digital',
        data: ['Switches',],
    },
    {
        title: 'Eletrônica Analógica',
        data: ['Diodo',],
    },
    {
        title: 'Circuitos Elétricos',
        data: ['Resistores',],
    },
    {
        title: 'Microbiologia',
        data: ['Bacterias',],
    },
];