import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Text, Container, Button, Form, Content, Item, Label, Input, Toast } from 'native-base';
import { NavigationActions } from 'react-navigation'

export default class PageCadastroDespesa extends Component {
    static navigationOptions = {
        title: 'Nova Despesa',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#700769' }
    };

    cadastraDespesa(){
        // Toast.show({
        //     text: 'Toast!',
        //     position: 'bottom',
        //     buttonText: 'Okay',
        //     duration: 1000
        // });
        this.props.navigation.goBack();
    }
    render() {
        return (
            <Container>
                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Label>Descrição</Label>
                            <Input />
                        </Item>
                        <Item>
                            <Input placeholder='Alguma coisa' />
                        </Item>
                    </Form>
                    <Button
                        style={{ marginTop: 20 }}
                        full onPress={() =>
                           this.cadastraDespesa()
                        }>
                        <Text>Cadastrar Despesa</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('PageCadastroDespesa', () => PageCadastroDespesa);