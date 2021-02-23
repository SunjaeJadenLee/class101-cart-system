import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CartViewModel from '../../scene/cart/CartViewModel'
import Coupon from '../../../entity/Coupon'
import CouponListItem from './CouponListItem'
import CouponViewModel from '../../scene/coupon/CouponViewModel'

type CouponListPropType = {
    couponViewModel : CouponViewModel;
    cartViewModel: CartViewModel;
    handleToggleCoupon: (coupon: Coupon) => void;
}

const CouponList = ({couponViewModel, cartViewModel, handleToggleCoupon}: CouponListPropType) => {
    return (
        <FlatList 
            data={couponViewModel.coupons}
            renderItem={({item})=><CouponListItem item={item} cartViewModel={cartViewModel} handleToggleCoupon={handleToggleCoupon}/>}
        />
    )
}

export default CouponList

const styles = StyleSheet.create({})
