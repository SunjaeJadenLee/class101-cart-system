import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CartItem from '../../../entity/CartItem'
import CartList from '../../component/cartlist/CartList'
import CartViewModel from './CartViewModel'
import CouponView from '../coupon/CouponView'
import CouponViewModel from '../coupon/CouponViewModel'
import SceneHeader from '../../component/common/SceneHeader'
import TotalPriceView from '../../component/totalPriceView/TotalPriceView'
import { useNavigation } from '@react-navigation/native'

type CartViewPropType = {
    cartViewModel: CartViewModel;
    couponViewModel: CouponViewModel;
}

const CartView = ({cartViewModel, couponViewModel}: CartViewPropType) => {
    const [isUpdate,setUpdate] = useState(0);
    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.goBack();
    }

    const handlePlusCartItem = (cartItem: CartItem) => {
        cartItem.amount = (cartItem.amount ?? 0) + 1;
        setUpdate(isUpdate + 1);
    }

    const handleMinusCartItem = (cartItem: CartItem) => {
        if(cartItem.amount !== 1) {
            cartItem.amount = (cartItem.amount ?? 0) - 1;
            setUpdate(isUpdate + 1);
        }
    }

    const handleActiveCartItem = (cartItem: CartItem,isActive: boolean) => {
        cartItem.isActive = !isActive;
        setUpdate(isUpdate - 1);
    }

    return (
        <View style={styles.container}>
            <SceneHeader title={'장바구니'} isCartScene={true} numOfProduct={cartViewModel.getNumOfProduct()} handleNavigation={handleNavigation}/>
            <CartList viewModel={cartViewModel} handlePlusCartItem={handlePlusCartItem} handleMinusCartItem={handleMinusCartItem} handleActiveCartItem={handleActiveCartItem}/>
            <CouponView couponViewModel={couponViewModel}/>
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
