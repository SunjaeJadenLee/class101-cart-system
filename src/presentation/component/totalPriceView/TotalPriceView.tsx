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
            <View style={styles.distintContainer}>
                <Text style={styles.originalPriceText}>{handleFormattedTotalPrice(viewModel.getTotalPrice())}</Text>
                <Text style={styles.discountAmountText}>{'- '+handleFormattedTotalPrice(viewModel.getDiscountAmount())}</Text>
                <Text style={styles.discountedPriceText}>{handleFormattedTotalPrice(viewModel.getDiscountedTotalPrice())}</Text>
            </View>
        </View>
    )
}

export default TotalPriceView

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        // justifyContent:'center',
        alignItems:'center'
    },
    distintContainer: {
        width:'100%',
        paddingHorizontal:20,
        backgroundColor: 'rgb(235,235,235)',
        borderTopColor: 'rgb(115,115,115)',
        borderTopWidth: .3,
        alignItems:'flex-end',
        paddingVertical: 10
    }, 
    originalPriceText: {
        fontSize: 14,
    },
    discountAmountText: {
        fontSize: 16,
        color: 'rgb(236,86,59)'
    },
    discountedPriceText: {
        fontSize: 24
    }
})
