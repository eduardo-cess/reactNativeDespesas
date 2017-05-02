import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Text, Container, Button, Form, Content, Item, Label, Input, Toast } from 'native-base';
import FormCadastroDespesa from './formCadastroDespesa.js';

export default class PageCadastroDespesa extends Component {
    static navigationOptions = {
        title: 'Nova Despesa',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#700769' }
    };

    render() {
        return (
            <Container>
                <Content padder>
                    <FormCadastroDespesa/>
                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('PageCadastroDespesa', () => PageCadastroDespesa);