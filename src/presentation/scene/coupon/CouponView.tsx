import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CartViewModel from '../cart/CartViewModel'
import Coupon from '../../../entity/Coupon'
import CouponList from '../../component/couponlist/CouponList'
import CouponViewModel from './CouponViewModel'

type CouponViewPropType = {
    couponViewModel : CouponViewModel;
    cartViewModel: CartViewModel;
    handleToggleCoupon: (coupon: Coupon) => void;
}

const CouponView = ({couponViewModel, cartViewModel, handleToggleCoupon}: CouponViewPropType) => {

    return (
        <View>
            <CouponList couponViewModel={couponViewModel} cartViewModel={cartViewModel} handleToggleCoupon={handleToggleCoupon}/>
        </View>
    )
}

export default CouponView

const styles = StyleSheet.create({})
