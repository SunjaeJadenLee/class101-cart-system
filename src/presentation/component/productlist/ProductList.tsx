import { FlatList, StyleSheet, Text, View } from 'react-native'

import Product from '../../../entity/Product'
import React from 'react'

type ProductListPropType = {
    products: Product[];
} 

const ProductList = ({products}:ProductListPropType) => {
    return (
        <FlatList />
    )
}

export default ProductList

const styles = StyleSheet.create({})
