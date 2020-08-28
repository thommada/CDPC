import React from 'react'
import { Text, View, ScrollView, Image, Dimensions } from 'react-native'

import DefaultStyle from '../styles/DefaultStyle'

const { width } = Dimensions.get("window")
const height = width * 0.6

class About extends React.Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: "whitesmoke" }}>
                <Image
                    source={require('../assets/img/CDPC1.jpeg')}
                    style={{ width, height, resizeMode: 'cover', marginBottom: 25 }}
                ></Image>

                <View style={{ marginHorizontal: 15 }}>
                    <Text style={DefaultStyle.textAbout}>
                        O Centro de Divulgação e Popularização da Ciência foi implementado através da parceria entre o IFSULDEMINAS – Campus Poços de Caldase a Autarquia Municipal de Ensino (AME), possuindo um espaço em prol da comunidade e do desenvolvimento científico regional. Foi inaugurado, no dia 13 de dezembro de 2019, no segundo andar da biblioteca do campus. Durante a solenidade de inauguração, foi assinado o termo de cessão dos equipamentos adquiridos pela AME ao IFSULDEMINAS, com investimentos de aproximadamente R$ 98 mil.
                    </Text>

                    <Text style={DefaultStyle.titleAbout}>Objetivo</Text>
                    <Text style={DefaultStyle.textAbout}>
                        O CDPC tem por objetivo a difusão e disseminação da ciência e atua na formação e acompanhamento de professores, principalmente da rede pública de ensino de Poços de Caldas, contribuindo com a melhoria da qualidade da educação básica nas áreas de física, química e biologia. São realizadas exposições interativas que fazem dos visitantes protagonistas dos experimentos. Já a “Experimentoteca” oferece kits portáteis de experimentos na área de ciências da natureza, que são emprestados aos professores da rede básica de ensino para que possam desenvolver atividades com os alunos em sala de aula.
                    </Text>

                    <Text style={DefaultStyle.titleAbout}>Papel da Autarquia</Text>
                    <Text style={DefaultStyle.textAbout}>
                        A Autarquia Municipal de Ensino foi a responsável pela aquisição dos kits pedagógicos, alguns inclusive vindos do exterior, móveis e equipamentos. Já a operacionalização do CDPC está a cargo do IFSULDEMINAS. Segundo Nanci de Moraes, a diretora executiva da AME, “o desejo da Autarquia Municipal de Ensino é atender a educação pública de Poços de Caldas e o projeto vem ao encontro dessa proposta, já que várias escolas são atendidas. O objetivo maior é que todo esse conhecimento científico chegue às salas de aula da rede pública”.
                    </Text>
                </View>
            </ScrollView>
        )
    }
}
export default About

