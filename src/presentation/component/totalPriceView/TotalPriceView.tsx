import { StyleSheet, Text, View } from 'react-native'

import CartViewModel from '../../scene/cart/CartViewModel'
import React from 'react'

type TotalPriceViewPropType = {
    viewModel : CartViewModel
}

const TotalPriceView = ({viewModel}:TotalPriceViewPropType) => {
    return (
        <View style={styles.container}>
            <Text>{viewModel.getTotalPrice()}</Text>
        </View>
    )
}

export default TotalPriceView

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor:'#ccc'
    }
})
