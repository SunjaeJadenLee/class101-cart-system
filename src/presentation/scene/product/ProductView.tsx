import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Product from '../../../entity/Product';
import ProductList from '../../component/productlist/ProductList';
import ProductViewModel from './ProductViewModel';

type ProductViewPropType = {
    viewModel: ProductViewModel;
    handleGetProduct: () => void
}

const ProductView = ({viewModel,handleGetProduct}: ProductViewPropType) => {

    return (
        <View>
            <ProductList viewModel={viewModel} handleGetProduct={handleGetProduct}/>
        </View>
    )
}

export default ProductView;

const styles = StyleSheet.create({})
