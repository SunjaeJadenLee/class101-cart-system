import { StyleSheet, Text, View } from 'react-native'

import CartViewModel from '../../scene/cart/CartViewModel'
import { Formatter } from '../../util/formatter'
import React from 'react'

type TotalPriceViewPropType = {
    viewModel : CartViewModel
}

const TotalPriceView = ({viewModel}:TotalPriceViewPropType) => {

    const handleFormattedTotalPrice = () => {
        return Formatter.decimal(viewModel.getTotalPrice());
    }
    
    return (
        <View style={styles.container}>
            <Text>{handleFormattedTotalPrice()}</Text>
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
