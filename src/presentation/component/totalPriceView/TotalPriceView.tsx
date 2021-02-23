import { StyleSheet, Text, View } from 'react-native'

import CartViewModel from '../../scene/cart/CartViewModel'
import { Formatter } from '../../util/formatter'
import React from 'react'

type TotalPriceViewPropType = {
    viewModel : CartViewModel
}

const TotalPriceView = ({viewModel}:TotalPriceViewPropType) => {

    const handleFormattedTotalPrice = (price: number) => {
        return Formatter.decimal(price);
    }
    
    return (
        <View style={styles.container}>
            <Text>{handleFormattedTotalPrice(viewModel.getTotalPrice())}</Text>
            <Text>{handleFormattedTotalPrice(viewModel.getDiscountAmount())}</Text>
            <Text>{handleFormattedTotalPrice(viewModel.getDiscountedTotalPrice())}</Text>
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
