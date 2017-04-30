import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Text, Container, Button } from 'native-base';
import { NavigationActions } from 'react-navigation'

export default class PageCadastroDespesa extends Component {
    static navigationOptions = {
        title: 'Nova Despesa',
    };
    render() {
        //const {  } = this.props.navigation;
        return (

            <Container>
                <Text>Pagina dois</Text>
                <Button full onPress={() => this.props.navigation.goBack(null)}>
                    <Text>Cadastrar Despesa</Text>
                </Button>
            </Container>
        );
    }
}

AppRegistry.registerComponent('PageCadastroDespesa', () => PageCadastroDespesa);