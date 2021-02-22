import { FlatList, StyleSheet, Text, View } from 'react-native'

import CouponListItem from './CouponListItem'
import CouponViewModel from '../../scene/coupon/CouponViewModel'
import React from 'react'

type CouponListPropType = {
    couponViewModel : CouponViewModel
}

const CouponList = ({couponViewModel}: CouponListPropType) => {
    return (
        <FlatList 
            data={couponViewModel.coupons}
            renderItem={({item})=><CouponListItem item={item}/>}
        />
    )
}

export default CouponList

const styles = StyleSheet.create({})
