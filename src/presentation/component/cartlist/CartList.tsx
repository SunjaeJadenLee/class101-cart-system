import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CartItem from '../../../entity/CartItem'
import CartListItem from './CartListItem'
import CartViewModel from '../../scene/cart/CartViewModel'

type CartListPropType = {
    viewModel: CartViewModel;
    handlePlusCartItem: (cartItem: CartItem) => void;
    handleMinusCartItem: (cartItem: CartItem) => void;
    handleActiveCartItem: (cartItem: CartItem, isActive: boolean) => void;
}

const CartList = ({viewModel,handlePlusCartItem,handleMinusCartItem,handleActiveCartItem}:CartListPropType) => {

    return (
        <FlatList 
            data={viewModel.products}
            renderItem={({item})=><CartListItem item={item} 
            handlePlusCartItem={handlePlusCartItem} 
            handleMinusCartItem={handleMinusCartItem} 
            handleActiveCartItem={handleActiveCartItem}
            />}
        />
    )
}

export default CartList

const styles = StyleSheet.create({})
