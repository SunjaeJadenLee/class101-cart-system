import { FlatList, StyleSheet, Text, View } from 'react-native'

import CartListItem from './CartListItem'
import CartViewModel from '../../scene/cart/CartViewModel'
import React from 'react'

type CartListPropType = {
    viewModel: CartViewModel
}

const CartList = ({viewModel}:CartListPropType) => {
    return (
        <FlatList 
            data={viewModel.products}
            renderItem={CartListItem}
        />
    )
}

export default CartList

const styles = StyleSheet.create({})
