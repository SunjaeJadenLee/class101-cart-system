import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CartItem from '../../../entity/CartItem'
import CartListItem from './CartListItem'
import CartViewModel from '../../scene/cart/CartViewModel'

type CartListPropType = {
    viewModel: CartViewModel;
    handlePlusCartItem: (cartItem: CartItem) => void;
    handleMinusCartItem: (CartItem: CartItem) => void;
}

const CartList = ({viewModel,handlePlusCartItem,handleMinusCartItem}:CartListPropType) => {

    return (
        <FlatList 
            data={viewModel.products}
            renderItem={({item})=><CartListItem item={item} handlePlusCartItem={handlePlusCartItem} handleMinusCartItem={handleMinusCartItem}/>}
        />
    )
}

export default CartList

const styles = StyleSheet.create({})
