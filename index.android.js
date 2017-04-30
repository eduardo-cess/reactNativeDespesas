import React, { Component } from 'react';
import { AppRegistry, Navigator, } from 'react-native';
import MainView from './src/index.js';
import { StackNavigator } from 'react-navigation';
import PageCadastroDespesa from './src/components/PageCadastroDespesa.js';


const Despesas = StackNavigator({
  Home: { screen: MainView },
  Cadastro: { screen: PageCadastroDespesa }
});
AppRegistry.registerComponent('Despesas', () => Despesas);
