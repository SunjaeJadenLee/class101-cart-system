import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import CartViewModel from '../../scene/cart/CartViewModel'
import Coupon from '../../../entity/Coupon'
import Icons from '../common/Icon'

type CouponListItemPropType = {
    item: Coupon;
    cartViewModel: CartViewModel
    handleToggleCoupon: (coupon: Coupon) => void;
}

const CouponListItem = ({item, cartViewModel, handleToggleCoupon}: CouponListItemPropType) => {

    const checkCoupon = (coupon: Coupon) => {
        return cartViewModel.coupon?.title == coupon.title && cartViewModel.coupon?.type == coupon.type
    }

    const handleClickCheckbox = () => {
        handleToggleCoupon(item);
    }

    return (
        <View style={styles.container}>
            <Icons size={16} color={'rgb(240,140,73)'} name={'ticket'} />
            <Text style={styles.couponTitleText}>{item.title}</Text>
            <TouchableOpacity onPress={handleClickCheckbox} style={{...styles.checkbox}}>
                {checkCoupon(item)&&<Icons size={14} color={'rgb(240,140,73)'} name={'check'}/>}
            </TouchableOpacity>
        </View>
    )
}

export default CouponListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems:'center'
    },
    couponTitleText: {
        fontSize: 14,
        lineHeight:20,
        fontWeight: '700',
        marginLeft: 5,
    },
    checkbox: {
        width: 15,
        height: 15,
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 5,
        borderWidth: .5,
        borderColor: 'rgb(115,115,115)'
    }
})
