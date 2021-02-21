import { StyleSheet, Text, View } from 'react-native'

import CartViewModel from './CartViewModel'
import React from 'react'
import SceneHeader from '../../component/common/SceneHeader'

type CartViewPropType = {
    cartViewModel: CartViewModel
}

const CartView = ({cartViewModel}: CartViewModel) => {
    return (
        <View style={styles.container}>
            <SceneHeader title={'장바구니'} isCartScene={true} numOfProduct={0}/>
        </View>
    )
}

export default CartView

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
