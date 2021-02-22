import { FlatList, StyleSheet, Text, View } from 'react-native'

import Coupon from '../../../entity/Coupon'
import CouponListItem from './CouponListItem'
import CouponViewModel from '../../scene/coupon/CouponViewModel'
import React from 'react'

type CouponListPropType = {
    couponViewModel : CouponViewModel;
    handleToggleCoupon: (coupon: Coupon) => void;
}

const CouponList = ({couponViewModel, handleToggleCoupon}: CouponListPropType) => {
    return (
        <FlatList 
            data={couponViewModel.coupons}
            renderItem={({item})=><CouponListItem item={item} handleToggleCoupon={handleToggleCoupon}/>}
        />
    )
}

export default CouponList

const styles = StyleSheet.create({})
