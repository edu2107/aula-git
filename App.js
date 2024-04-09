import React from 'react';

import { Text, StyleSheet, View, Image } from 'react-native';

import Header from './components/header';

import Card from './components/Card';

export default function App() {

    return (

        <View style={estilo.container}>

            <Header></Header>

            <Card porcentagem='6' titulo='TIME' imagem='https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png' descricao='CORINTHIANS'></Card>

            <Card porcentagem='6' titulo='TIME' imagem='https://w7.pngwing.com/pngs/300/1022/png-transparent-manchester-city-f-c-fa-cup-manchester-derby-west-gorton-premier-league-premier-league-emblem-trademark-sport-thumbnail.png' descricao='CITY'></Card>

            <Card porcentagem='6' titulo='TIME' imagem='https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6079.png' descricao='BRAGANTINO'></Card>

            <Card porcentagem='6' titulo='TIME' imagem='https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/18127.png' descricao='NOVORIZONTINO'></Card>

            <Card porcentagem='6' titulo='TIME' imagem='https://s3.static.brasilescola.uol.com.br/be/2023/09/escudo-da-ponte-preta.jpg' descricao='PONTE PRETA'></Card>

            <Card porcentagem='6' titulo='TIME' imagem='https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4774.png' descricao='ITUANO'></Card>

            <Card porcentagem='6' titulo='TIME' imagem='https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4774.png' descricao='ITUANO'></Card>

        </View>

    );

}

const estilo = StyleSheet.create({

    container: {

        flex: 1,

        alignItems: 'center',

        backgroundColor: '#CAF0F8',

        borderColor: '#90E0EF',

        paddingHorizontal: 20,

    },

});