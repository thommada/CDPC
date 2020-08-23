import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={Styles.container}>Carregando...</Text>
                <ActivityIndicator size='large'></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})