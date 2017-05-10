import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Text, Container, Button, Form, Content, Item, Label, Input, Toast } from 'native-base';

export default class PageCadastroDespesa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descricao: '',
            valor: 0,
            id: 1
        }
    }
    static navigationOptions = {
        title: 'Nova Despesa',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#700769' }
    };

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
        //TODO fazer AsyncStorage com try-catch
        AsyncStorage.getItem('last_id', (err, result) => {
            if (!result) {
                let despesa = {
                    id: this.state.id,
                    descricao: this.state.descricao,
                    valor: this.state.valor,
                    date: this.dataAtualFormatada()
                }
                console.log(despesa);
                let last_id = { id: this.state.id };
                AsyncStorage.setItem('despesa:' + this.state.id, JSON.stringify(despesa));
                AsyncStorage.setItem('last_id', JSON.stringify(last_id));
            }
            else {
                AsyncStorage.getItem('last_id', (err, result) => {
                    let last_id = JSON.parse(result).id;
                    this.setState({ id: last_id + 1 });
                    let despesa = {
                        id: this.state.id,
                        descricao: this.state.descricao,
                        valor: this.state.valor,
                        date: this.dataAtualFormatada()
                    }
                    last_id = { id: this.state.id };
                    console.log("ultimo id: " + last_id.id);
                    AsyncStorage.setItem('last_id', JSON.stringify(last_id));
                    AsyncStorage.setItem('despesa:' + last_id.id, JSON.stringify(despesa));
                });
            }
        });
        // AsyncStorage.setItem('despesa', JSON.stringify(despesa));
        // PageCadastroDespesa.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <Content padder>
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
                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('PageCadastroDespesa', () => PageCadastroDespesa);