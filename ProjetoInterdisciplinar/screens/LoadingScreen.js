import React from 'react';
import {  Text, View, StyleSheet,  ActivityIndicator } from 'react-native';

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style = {Styles.container}>Carregando...</Text>
                <ActivityIndicator size = 'large'></ActivityIndicator>
            </View>
        )
    }
}

