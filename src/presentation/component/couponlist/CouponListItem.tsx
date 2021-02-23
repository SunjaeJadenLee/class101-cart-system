import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import CartViewModel from '../../scene/cart/CartViewModel'
import Coupon from '../../../entity/Coupon'

type CouponListItemPropType = {
    item: Coupon;
    cartViewModel: CartViewModel
    handleToggleCoupon: (coupon: Coupon) => void;
}

const CouponListItem = ({item, cartViewModel, handleToggleCoupon}: CouponListItemPropType) => {
    const handlePresentDiscount = () => {
        if(item.type == 'rate'){
            return item.discountRate
        } else if (item.type == 'amount'){
            return item.discountAmount
        } else {
            return 0;
        }
    }

    const checkCoupon = (coupon: Coupon) => {
        return cartViewModel.coupon?.title == coupon.title && cartViewModel.coupon?.type == coupon.type
    }

    const handleClickCheckbox = () => {
        handleToggleCoupon(item);
    }

    return (
        <View style={styles.container}>
            <Text>{item.title}</Text>
            <Text>{handlePresentDiscount()}</Text>
            <TouchableOpacity onPress={handleClickCheckbox} style={{...styles.checkbox,backgroundColor:checkCoupon(item)?'#000':'#ccc'}}>
                
            </TouchableOpacity>
        </View>
    )
}

export default CouponListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    checkbox: {
        width: 20,
        height: 20,
    }
})
