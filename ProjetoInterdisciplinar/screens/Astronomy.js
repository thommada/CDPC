import React from 'react'
import { Text, View, ScrollView, Image, Dimensions, Linking, TouchableHighlight } from 'react-native'

import DefaultStyle from '../styles/DefaultStyle'

const { width } = Dimensions.get("window")
const height = width * 0.6

class Astronomy extends React.Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: "whitesmoke" }}>
                <Image
                    source={require('../assets/img/capagdai.jpg')}
                    style={{ width, height, resizeMode: 'cover', marginBottom: 25 }}
                ></Image>

                <View style={{ marginHorizontal: 15 }}>

                    <Text style={DefaultStyle.textAbout}>O G-DAI - Grupo de Divulgação da Astronomia do IFSULDEMINAS foi fundado no dia 18 de dezembro de 2019 por meio de um edital externo do IFSULDEMINAS que permitiu que dois alunos entrassem como bolsistas do projeto e conta ainda com a participação de dois voluntários, sob orientação do Professor Rodrigo Ortolan. Desde então, se começou o planejamento das atividades, bem como o estudo sobre astronomia e astrofísica realizado através de cursos online.</Text>

                    <Text style={DefaultStyle.titleAbout}>Objetivo</Text>
                    <Text style={DefaultStyle.textAbout}>Com objetivo de divulgar a astronomia, o G-DAI realiza ações dentro do campus Poços de Caldas que são abertas à comunidade, e também externamente como em escolas, instituições e praças. Segue algumas da ações desenvolvidas:</Text>
                    <Text style={DefaultStyle.textBold}>Seção Astronomia:</Text>
                    <Text style={DefaultStyle.textAbout}>Apresentação de palestras semanais no campus (e eventuais em instituições) com ensinamentos dos mais variados temas na área de astronomia com linguagem acessível ao público não especializado.</Text>
                    <Text style={DefaultStyle.textBold}>Observação do céu noturno: </Text>
                    <Text style={DefaultStyle.textAbout}>Sessões de observação do céu noturno utilizando telescópios, além de visualização a olho nu reconhecendo constelações e planetas.</Text>
                    <Text style={DefaultStyle.textBold}>Modelos didáticos: </Text>
                    <Text style={DefaultStyle.textAbout}>Construção e apresentação de modelos didáticos para auxiliar no aprendizado dos conceitos básicos de astronomia.</Text>
                    <Text style={DefaultStyle.textBold}>Instrumentos astronômicos de baixo custo: </Text>
                    <Text style={DefaultStyle.textAbout}>Concepção, construção e utilização de instrumentos astronômicos de baixo custo como lunetas, binóculos e relógio solar utilizando materiais de fácil acesso.</Text>
                    <Text style={DefaultStyle.textBold}>Construção de foguetes: </Text>
                    <Text style={DefaultStyle.textAbout}>Concepção construção e testes de modelos de foguetes de ar comprimido e bases de lançamento de foguetes utilizando materiais de fácil acesso estimulando assim a participação na Mostra Brasileira de Foguetes (MOBFOG).</Text>

                    <Text style={DefaultStyle.titleAbout}>Envolvimento com o CDPC</Text>
                    <Text style={DefaultStyle.textAbout}>Além disso, o G-DAI busca fortalecer as atividades do Centro de Divulgação e Popularização da Ciência (CDPC) do campus Poços de Caldas do IFSULDEMINAS no que se refere à ampla difusão e disseminação da ciência, bem como no apoio à divulgação e inserção do campus em toda a região.</Text>
                </View>
                <View style={DefaultStyle.horizontal}>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/channel/UC3aM8LVfvsYP__1878LFvDQ')}>
                        <Image
                            source={require('../assets/img/youtube.png')}
                            style={DefaultStyle.logoSmall}
                        ></Image>
                    </TouchableHighlight>
                    <Image
                        source={require('../assets/img/logogdai.png')}
                        style={DefaultStyle.logo}
                    ></Image>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com/gdaipcs')}>
                        <Image
                            source={require('../assets/img/fb.png')}
                            style={DefaultStyle.logoSmall}
                        ></Image>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}
export default Astronomy