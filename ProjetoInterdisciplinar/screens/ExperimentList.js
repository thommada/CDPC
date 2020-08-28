import React from 'react'
import { Text, View, LayoutAnimation, ScrollView, UIManager, TouchableOpacity, Platform, SafeAreaView } from 'react-native'

import Style from '../styles/ExperimentListStyle'
import DefaultStyle from '../styles/DefaultStyle'


class ExpandableItemComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            layoutHeight: 0,
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.item.isExpanded) {
            this.setState(() => {
                return {
                    layoutHeight: null,
                };
            });
        }
        else {
            this.setState(() => {
                return {
                    layoutHeight: 0,
                };
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.layoutHeight !== nextState.layoutHeight) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={this.props.onClickFunction}
                    style={Style.header}>
                    <Text style={Style.subtitle}>{this.props.item.category_name}</Text>
                </TouchableOpacity>
                <View 
                    style={{height: this.state.layoutHeight, overflow: 'hidden',}}>
                    {/*Content under the header of the Expandable List Item*/}
                    {this.props.item.subcategory.map((item, key) => (
                        <TouchableOpacity key={key} style={Style.content} onPress={() => alert( 'Experimento ' + item.id + ': ' + '\n'+ item.val)}>   
                            <Text style={Style.text}>Experimento {item.id}: {item.val} </Text>      
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}
class ExperimentList extends React.Component {
    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = { listDataSource: CONTENT };
    }

    updateLayout = index => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...this.state.listDataSource];
        //For Single Expand at a time
        array.map((value, placeindex) =>
            placeindex === index
                ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
                : (array[placeindex]['isExpanded'] = false)
        );

        this.setState(() => {
            return {
                listDataSource: array,
            };
        });
    };
    render() {
        return (
            <View style={DefaultStyle.container}>
                <SafeAreaView style={Style.box}>
                    <ScrollView>
                        {this.state.listDataSource.map((item, key) => (
                            <ExpandableItemComponent
                                key={item.category_name}
                                onClickFunction={this.updateLayout.bind(this, key)}
                                item={item}
                            />
                        ))}
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}
export default ExperimentList;
const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Física',
        subcategory: [{ id: 101, val: 'Pêndulo Livre', disp: true }, { id: 102, val: 'Disco flutuante', disp: false }, { id: 103, val: 'Energia de Movimento', disp: true }],
    },
    {
        isExpanded: false,
        category_name: 'Química',
        subcategory: [{ id: 201, val: 'Solução Tampão', disp: true }, { id: 202, val: 'Ácido-base', disp: false }],
    },
    {
        isExpanded: false,
        category_name: 'Biologia',
        subcategory: [{ id: 301, val: 'Deterioração do Plástico', disp: false }, { id: 302, val: 'Digestão', disp: true }],
    },
    {
        isExpanded: false,
        category_name: 'História',
        subcategory: [{ id: 401, val: 'Segunda Guerra Mundial', disp: true }, { id: 402, val: 'Guerra Fria', disp: false }],
    },
    {
        isExpanded: false,
        category_name: 'Geografia',
        subcategory: [{ id: 501, val: 'Montanhas', disp: false }],
    },
    {
        isExpanded: false,
        category_name: 'Eletrônica Digital',
        subcategory: [{ id: 601, val: 'Switches', disp: true }],
    },
    {
        isExpanded: false,
        category_name: 'Eletrônica Analógica',
        subcategory: [{ id: 701, val: 'Diodo', disp: true }],
    },
    {
        isExpanded: false,
        category_name: 'Circuitos Elétricos',
        subcategory: [{ id: 801, val: 'Resistores', disp: true }],
    },
    {
        isExpanded: false,
        category_name: 'Microbiologia',
        subcategory: [{ id: 901, val: 'Bacterias', disp: true }],
    },

    
];
