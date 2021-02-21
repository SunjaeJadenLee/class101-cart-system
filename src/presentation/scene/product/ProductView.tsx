import { FlatList, StyleSheet, Text, View } from 'react-native'

import Product from '../model/Product';
import ProductList from '../component/ProductList';
import ProductViewPropType from './propTypes/ProductViewPropType';
import React from 'react'

const ProductView = ({products}: ProductViewPropType) => {
    return (
        <ProductList products={products}/>
    )
}

export default ProductView;

const styles = StyleSheet.create({})
