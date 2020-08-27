import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

import DefaultStyle from '../styles/DefaultStyle'

class About extends React.Component {
    render() {
        return (
            <View style={DefaultStyle.containerCenter}>
                <Text style={styles.text}>O CDPC tem por objetivo a difusão e disseminação da ciência e vai atuar na formação e acompanhamento de professores, principalmente da rede pública de ensino de Poços de Caldas, contribuindo com a melhoria da qualidade da educação básica nas áreas de física, química e biologia. Serão realizadas exposições interativas que farão dos visitantes protagonistas dos experimentos. Já a “Experimentoteca” vai oferecer kits portáteis de experimentos na área de ciências da natureza, que serão emprestados aos professores da rede básica de ensino para que possam desenvolver atividades com os alunos em sala de aula.</Text>
                <Image
                    source={require('../assets/img/cdpc-circular.png')}
                    style={DefaultStyle.logo}
                ></Image>
            </View>
        )
    }
}
export default About

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
});
