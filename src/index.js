import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ListDespesas from './components/listDespesas.js';
import App from '../index.android.js';
export default class MainView extends Component {
    static navigationOptions = {
        title: 'Bem Vindo',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#700769' },
        headerLeft: (
            <Button transparent>
                <Icon style={{color:'white'}} name='menu' />
            </Button>
        )
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content padder>
                    <Button full onPress={() => navigate('Cadastro')}>
                        <Text>Nova Despesa</Text>
                    </Button>
                    <ListDespesas />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => console.log('teste 123')}>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

AppRegistry.registerComponent('MainView', () => MainView);