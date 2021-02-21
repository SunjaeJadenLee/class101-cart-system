import { StyleSheet, Text, View } from 'react-native'

import CartViewModel from './CartViewModel'
import React from 'react'
import SceneHeader from '../../component/common/SceneHeader'
import { useNavigation } from '@react-navigation/native'

type CartViewPropType = {
    cartViewModel: CartViewModel
}

const CartView = ({cartViewModel}: CartViewModel) => {
    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <SceneHeader title={'장바구니'} isCartScene={true} numOfProduct={0} handleNavigation={handleNavigation}/>
        </View>
    )
}

export default CartView

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
