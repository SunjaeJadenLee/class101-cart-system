import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CartItem from '../../../entity/CartItem'
import { TouchableOpacity } from 'react-native-gesture-handler'

type CartListItemPropType = {
    item: CartItem;
    handlePlusCartItem: (cartItem: CartItem) => void;
    handleMinusCartItem: (cartItem: CartItem) => void;
    handleActiveCartItem: (cartItem: CartItem, isActive: boolean) => void;

}

const CartListItem = ({ item, handlePlusCartItem, handleMinusCartItem, handleActiveCartItem }: CartListItemPropType) => {
    const [isChecked, setChecked] = useState(true);

    const handleClickCheckbox = () => {
        handleActiveCartItem(item, isChecked);
        setChecked(!isChecked);
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.coverImage }} style={styles.thumbnailImage} />
            <Text style={styles.titleText}>{item.title}</Text>
            <View style={styles.amountContainer} >
                <TouchableOpacity onPress={() => handleMinusCartItem(item)} style={styles.amountButton}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text>{item.amount}</Text>
                <TouchableOpacity onPress={() => handlePlusCartItem(item)} style={styles.amountButton}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClickCheckbox} style={[styles.checkbox, isChecked ? { backgroundColor: '#000' } : { backgroundColor: '#ccc' }]}>

                </TouchableOpacity>
                {item.availableCoupon === false && <Text>{'쿠폰 x'}</Text>}
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
        width: '100%',
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkbox: {
        width: 30,
        height: 30
    }
})
