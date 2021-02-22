import { StyleSheet, Text, View } from 'react-native'

import Coupon from '../../../entity/Coupon'
import React from 'react'

type CouponListItemPropType = {
    item: Coupon;
}

const CouponListItem = ({item}: CouponListItemPropType) => {

    const handlePresentDiscount = () => {
        if(item.type == 'rate'){
            return item.discountRate
        } else if (item.type == 'amount'){
            return item.discountAmount
        } else {
            return 0;
        }
    }

    return (
        <View>
            <Text>{item.title}</Text>
            <Text>{handlePresentDiscount()}</Text>
        </View>
    )
}

export default CouponListItem

const styles = StyleSheet.create({})
