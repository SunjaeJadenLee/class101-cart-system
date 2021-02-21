import { StyleSheet, Text, View } from 'react-native'

import CartView from '../CartView'
import CartViewModel from '../CartViewModel'
import React from 'react'

type CartControllerPropType = {
    cartViewModel : CartViewModel;
}

const CartController = ({cartViewModel}: CartControllerPropType) => {
    return (
        <CartView cartViewModel={cartViewModel}/>
    )
}

export default CartController
