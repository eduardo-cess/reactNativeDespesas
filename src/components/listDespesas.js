import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Text,List,ListItem } from 'native-base';

export default class ListDespesas extends Component {
    constructor(props){
        super(props);
        this.state={
            teste: 0
        }
    }
    render() {
        return (
            <List>
                <ListItem >
                    <Text>Simon Mignolet</Text>
                </ListItem>
                <ListItem>
                    <Text>Nathaniel Clyne</Text>
                </ListItem>
                <ListItem>
                    <Text>Dejan Lovren</Text>
                </ListItem>
            </List>

        );
    }
}
AppRegistry.registerComponent('ListDespesas', () => ListDespesas);