import { StyleSheet, Text, View } from 'react-native'

import CartProvider from '../../provider/CartProvider';
import { NavigationContainer } from '@react-navigation/native';
import ProductProvider from '../../provider/ProductProvider';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Routes = () => {
    const stack = createStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name={'productScene'} options={{ headerShown: false }} component={ProductProvider} />
                <stack.Screen name={'cartScene'} options={{ headerShown: false }} component={CartProvider} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})
