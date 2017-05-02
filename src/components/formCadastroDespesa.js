import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, Navigator } from 'react-native';
import { Text, Button, Form, Item, Label, Input, Toast } from 'native-base';
import { NavigationActions } from 'react-navigation';
import PageCadastroDespesa from './PageCadastroDespesa.js';

export default class FormCadastroDespesa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descricao: '',
            valor: 0,
        }
    }
    dataAtualFormatada() {
        let data = new Date();
        let dia = data.getDate();
        if (dia.toString().length == 1)
            dia = "0" + dia;
        let mes = data.getMonth() + 1;
        if (mes.toString().length == 1)
            mes = "0" + mes;
        let ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }
    cadastraDespesa() {
        // Toast.show({
        //     text: this.state.valor+' -- '+this.state.descricao,
        //     position: 'bottom',
        //     buttonText: 'Okay',
        //     duration: 3000
        // });
        let despesa = {
            descricao: this.state.descricao,
            valor: this.state.valor,
            date: this.dataAtualFormatada()
        }
        console.log(despesa);
        //TODO fazer AsyncStorage com try-catch
        AsyncStorage.getItem('despesa', (err, result) => {
            if (result) {
                console.log(result);
                AsyncStorage.mergeItem('despesa', JSON.stringify(despesa));
            }
            // else {
            //     AsyncStorage.setItem('despesa', JSON.stringify(despesa));
            // }
        });
        // AsyncStorage.setItem('despesa', JSON.stringify(despesa));
        // PageCadastroDespesa.props.navigation.goBack();
    }
    render() {
        return (
            <Form>
                <Item floatingLabel>
                    <Label>Descrição</Label>
                    <Input onChangeText={(descricao) => this.setState({ descricao })} />
                </Item>
                <Item>
                    <Input placeholder='Valor' onChangeText={(valor) => this.setState({ valor })} />
                </Item>
                <Button
                    style={{ marginTop: 20 }}
                    full onPress={() =>
                        this.cadastraDespesa()
                    }>
                    <Text>Cadastrar Despesa</Text>
                </Button>
            </Form>
        );
    }
}
AppRegistry.registerComponent('FormCadastroDespesa', () => FormCadastroDespesa);