import React, { Component } from 'react';
import { AppRegistry, Navigator, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ListDespesas from './components/listDespesas.js';
import App from '../index.android.js';

export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: '',
        }
    }
    static navigationOptions = {
        title: 'Bem Vindo',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#700769' },
        headerLeft: (
            <Button transparent>
                <Icon style={{ color: 'white' }} name='menu' />
            </Button>
        )
    };



    getDespesas() {
        // AsyncStorage.getItem('despesa:1', (err, result) => {
        //     let a = JSON.parse(result);
        //     console.log(a);
        // });


        // function despesas(){
        //     return new Promisse(function (resolve,reject){

        //     });
        // }
        // let despesas = AsyncStorage.getItem('last_id', (err, result) => {
        //     let last_id = JSON.parse(result).id;
        //     let despesas = new Array();
        //     for (let i = 1; i <= last_id; i++) {
        //         let despesa = AsyncStorage.getItem('despesa:'+i, (err, result) => {
        //                 let despesa = JSON.parse(result);
        //                 return despesa;
        //         });
        //         despesas.push(despesa);
        //     }
        //     //console.log(despesas);
        //     return despesas;
        // });
        // console.log(despesas);
        // AsyncStorage.getAllKeys((err, result) => {
        //     console.log(result);
        // });

    }
    ShowList() {
        AsyncStorage.getItem('last_id', (err, result) => {
            // let a = JSON.parse(result);
            if (result)
                this.setState({ isLogged: 'logged' });
        });
        if (this.state.isLogged == 'logged')
            return <ListDespesas />;
        else
            return <Text>Não está logado</Text>;
    }
    removeAll() {
        AsyncStorage.clear();
        this.setState({ isLogged: '' });
        this.ShowList();
    }
    render() {

        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content padder>
                    <Button full onPress={() => navigate('Cadastro')}>
                        <Text>Nova Despesa</Text>
                    </Button>
                    {this.ShowList()}
                    {/*<ListDespesas style={{display: (this.props.isLogged == 'logged')?'block':'none'}}/>*/}
                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#700769' }}>
                        <Button style={{ backgroundColor: '#700769' }} onPress={() => this.removeAll()}>
                            <Text style={{ color: 'white' }}>Remover</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

AppRegistry.registerComponent('MainView', () => MainView);