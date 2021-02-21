import { FlatList, StyleSheet, Text, View } from 'react-native'

import Product from '../../../entity/Product';
import ProductList from '../../component/productlist/ProductList';
import React from 'react'

type ProductViewPropType = {
    products: Product[];
}

const ProductView = ({products}: ProductViewPropType) => {
    return (
        <ProductList products={products}/>
    )
}

export default ProductView;

const styles = StyleSheet.create({})
