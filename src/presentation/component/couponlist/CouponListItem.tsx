import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Coupon from '../../../entity/Coupon'

type CouponListItemPropType = {
    item: Coupon;
    handleToggleCoupon: (coupon: Coupon) => void;
}

const CouponListItem = ({item, handleToggleCoupon}: CouponListItemPropType) => {
    const [isChecked,setChecked] = useState(false);

    const handlePresentDiscount = () => {
        if(item.type == 'rate'){
            return item.discountRate
        } else if (item.type == 'amount'){
            return item.discountAmount
        } else {
            return 0;
        }
    }

    const handleClickCheckbox = () => {
        handleToggleCoupon(item);
        setChecked(!isChecked);
    }

    return (
        <View style={styles.container}>
            <Text>{item.title}</Text>
            <Text>{handlePresentDiscount()}</Text>
            <TouchableOpacity onPress={handleClickCheckbox} style={{...styles.checkbox,backgroundColor:isChecked?'#000':'#ccc'}}>
                
            </TouchableOpacity>
        </View>
    )
}

export default CouponListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    checkbox: {
        width: 20,
        height: 20,
    }
})
