import React from 'react'
import { Text, View, SafeAreaView, SectionList, TouchableOpacity, ScrollView } from 'react-native'

import Style from '../styles/ExperimentListStyle'
import DefaultStyle from '../styles/DefaultStyle'

import firebase from '../components/firebase/config';

export default class ExperimentList extends React.Component {

    constructor() {
        super();
        this.firestoreChe = firebase.firestore().collection('experiments');
        this.state = {
            isLoading: true,
            expChe: [],
            expPhy: [],
            expBio: [],
            expMat: [],
        };
    }

    componentDidMount() {
        this.unsubscribe = this.firestoreChe.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getCollection = (querySnapshot) => {
        const expPhy = [];
        const expChe = [];
        const expBio = [];
        const expMat = [];

        querySnapshot.forEach((res) => {
            const { title, resume, qualification, discip, details } = res.data();

            /****  DEVE TER UM JEITO MELHOR DO QUE USAR OS IF/ELSE TIPO UM "switch case"  ****/

            if (discip == 'quimica') {
                expChe.push({
                    key: res.id,
                    res,
                    title,
                    resume,
                    qualification,
                    discip,
                    details,
                });
            } else if (discip == 'fisica') {
                expPhy.push({
                    key: res.id,
                    res,
                    title,
                    resume,
                    qualification,
                    discip,
                    details,
                });
            } else if (discip == 'biologia') {
                expBio.push({
                    key: res.id,
                    res,
                    title,
                    resume,
                    qualification,
                    discip,
                    details,
                });
            } else if (discip == 'matematica') {
                expMat.push({
                    key: res.id,
                    res,
                    title,
                    resume,
                    qualification,
                    discip,
                    details,
                });
            }
        });
        this.setState({
            expPhy,
            expChe,
            expBio,
            expMat,
            isLoading: false,
        });
    }

    render() {
        return (
            <View style={DefaultStyle.container}>
                <View style={Style.boxtitle}>
                    <Text style={Style.title}>Lista de Experimentos</Text>
                </View>
                <View style={Style.box}>
                    <ScrollView>
                        <Text style={Style.header}>Física</Text>
                        {
                            this.state.expPhy.map((item) => {
                                return (
                                    <Text style={Style.boxheader}>{item.title}</Text>
                                );
                            })
                        }
                        <Text style={Style.header}>Química</Text>
                        {
                            this.state.expChe.map((item) => {
                                return (
                                    <Text style={Style.boxheader}>{item.title}</Text>
                                );
                            })
                        }
                        <Text style={Style.header}>Biologia</Text>
                        {
                            this.state.expBio.map((item) => {
                                return (
                                    <Text style={Style.boxheader}>{item.title}</Text>
                                );
                            })
                        }
                        <Text style={Style.header}>Matemática</Text>
                        {
                            this.state.expMat.map((item) => {
                                return (
                                    <Text style={Style.boxheader}>{item.title}</Text>
                                );
                            })
                        }
                    </ScrollView>
                </View>
            </View>
            /*
                <View style={DefaultStyle.container}>
                           
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
                       */
        );
    }
}