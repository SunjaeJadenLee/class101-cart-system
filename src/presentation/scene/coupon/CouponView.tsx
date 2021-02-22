import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Coupon from '../../../entity/Coupon'
import CouponList from '../../component/couponlist/CouponList'
import CouponViewModel from './CouponViewModel'

type CouponViewPropType = {
    couponViewModel : CouponViewModel,
    handleToggleCoupon: (coupon: Coupon) => void
}

const CouponView = ({couponViewModel, handleToggleCoupon}: CouponViewPropType) => {

    return (
        <View>
            <CouponList couponViewModel={couponViewModel} handleToggleCoupon={handleToggleCoupon}/>
        </View>
    )
}

export default CouponView

const styles = StyleSheet.create({})
