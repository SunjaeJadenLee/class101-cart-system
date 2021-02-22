import { FlatList, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'

import CartItem from '../../../entity/CartItem';
import CartViewModel from '../cart/CartViewModel';
import Product from '../../../entity/Product';
import ProductList from '../../component/productlist/ProductList';
import ProductViewModel from './ProductViewModel';
import SceneHeader from '../../component/common/SceneHeader';

type ProductViewPropType = {
    viewModel: ProductViewModel;
    cartViewModel: CartViewModel;
    numOfCartItem: number;
    handleAddToCartItem: (product: CartItem) => boolean;
    
}

const ProductView = ({ viewModel, cartViewModel, numOfCartItem, handleAddToCartItem }: ProductViewPropType) => {
    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate('cartScene',{
            cartViewModel
        })
    }

    return (
        <View style={styles.container}>
            <SceneHeader title={'클래스'} isCartScene={false} numOfProduct={numOfCartItem} handleNavigation={handleNavigation}/>
            <ProductList viewModel={viewModel} cartViewModel={cartViewModel} handleAddToCartItem={handleAddToCartItem}/>
        </View>
    )
}

export default ProductView;

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingBottom:20
    }
})
