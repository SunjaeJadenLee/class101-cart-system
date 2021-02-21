import { FlatList, StyleSheet, Text, View } from 'react-native'

import Product from '../../../entity/Product'
import ProductListItem from './ProductListItem'
import React from 'react'

type ProductListPropType = {
    products: Product[];
} 

const ProductList = ({products}:ProductListPropType) => {
    return (
        <FlatList 
            numColumns={2}
            data={products}
            renderItem={ProductListItem}
        />
    )
}

export default ProductList

const styles = StyleSheet.create({})
