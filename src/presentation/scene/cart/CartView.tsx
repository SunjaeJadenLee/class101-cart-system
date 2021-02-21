import { StyleSheet, Text, View } from 'react-native'

import CartList from '../../component/cartlist/CartList'
import CartViewModel from './CartViewModel'
import React from 'react'
import SceneHeader from '../../component/common/SceneHeader'
import TotalPriceView from '../../component/totalPriceView/TotalPriceView'
import { useNavigation } from '@react-navigation/native'

type CartViewPropType = {
    cartViewModel: CartViewModel
}

const CartView = ({cartViewModel}: CartViewPropType) => {
    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <SceneHeader title={'장바구니'} isCartScene={true} numOfProduct={cartViewModel.getNumOfProduct()} handleNavigation={handleNavigation}/>
            <CartList viewModel={cartViewModel}/>
            <TotalPriceView viewModel={cartViewModel}/>
        </View>
    )
}

export default CartView

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
