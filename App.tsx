import {NavigationContainer} from '@react-navigation/native'
import ProductProvider from './src/provider/ProductProvider';
import React from 'react';
import Routes from './src/presentation/util/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

declare const global: {HermesInternal: null | {}};

const App = () => {
  
  return (
    <>
      <SafeAreaView />
      <Routes />
    </>
  );
};

export default App;
