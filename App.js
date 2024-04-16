import React from 'react';

import { Text, StyleSheet, View, Image, FlatList } from 'react-native';

import Header from './components/header';

import Card from './components/Card';
import Data from './data';

export default function App() {

    return (

        <View style={estilo.container}>

            <Header></Header>
            <View style = {{width:'100%'}}>
            <FlatList
                data={Data}
                horinzontal = {true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                   <Card 
                   titulo = {item.titulo}
                   porcentagem = {item.porcentagem}
                   imagem = {item.imagem}
                   descricao = {item.descriçao}
                   />
                )}
            />
        </View>
        </View>
    );
}

const estilo = StyleSheet.create({

    container: {

        flex: 1,

        alignItems: 'center',

        backgroundColor: '#0000',

        borderColor: '#90E0EF',

        paddingHorizontal: 20,

    },

});
