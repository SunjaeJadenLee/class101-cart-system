import { StyleSheet, Text, View } from 'react-native'

import CartView from '../CartView'
import CartViewModel from '../CartViewModel'
import CouponViewModel from '../../coupon/CouponViewModel'
import React from 'react'

type CartControllerPropType = {
    cartViewModel : CartViewModel;
    couponViewModel : CouponViewModel;
}

const CartController = ({cartViewModel, couponViewModel}: CartControllerPropType) => {
    return (
        <CartView cartViewModel={cartViewModel} couponViewModel={couponViewModel}/>
    )
}

export default CartController
