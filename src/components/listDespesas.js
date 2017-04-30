import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Text} from 'native-base';

export default class ListDespesas extends Component{
    render(){
        return(
            <Text>Lista de Despesas</Text>
        );
    }
}
AppRegistry.registerComponent('ListDespesas', () => ListDespesas);