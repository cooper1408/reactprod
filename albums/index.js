//import needed files
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/componets/Header';
import AlbumList from './src/componets/AlbumList';

AppRegistry.registerComponent('albums', () => App);
//Create Componet
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);
//Render the Componet to the device
AppRegistry.registerComponent('albums', () => App);
