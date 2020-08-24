import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Image
                    source={require('../assets/cdpc-circular.png')}
                    style={styles.logo}
                ></Image>

                <Text style={styles.loading}>Carregando...</Text>
                <ActivityIndicator size='large'></ActivityIndicator>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loading: {
        fontSize: 28,
        marginBottom: 10
    },
    logo: {
        alignSelf: "center",
        height: 280,
        width: 280
    }
})