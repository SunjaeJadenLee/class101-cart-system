import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CartItem from '../../../entity/CartItem'
import { TouchableOpacity } from 'react-native-gesture-handler'

type CartListItemPropType = {
    item: CartItem;
    handlePlusCartItem: (cartItem: CartItem) => void;
    handleMinusCartItem: (cartItem: CartItem) => void;

}

const CartListItem = ({ item, handlePlusCartItem, handleMinusCartItem }: CartListItemPropType) => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.coverImage }} style={styles.thumbnailImage} />
            <Text style={styles.titleText}>{item.title}</Text>
            <View style={styles.amountContainer} >
                <TouchableOpacity onPress={()=>handleMinusCartItem(item)}  style={styles.amountButton}>
                    <Text>-</Text>
                </TouchableOpacity>
            <Text>{item.amount}</Text>
            <TouchableOpacity onPress={()=>handlePlusCartItem(item)} style={styles.amountButton}>
                <Text>+</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 400
    },
    thumbnailImage: {
        width:'100%',
        height: 300
    },
    titleText: {

    },
    amountContainer: {
        flexDirection: 'row'
    },
    amountButton: {
        width: 20,
        height: 20,
        justifyContent:'center',
        alignItems:'center'
    }
})
