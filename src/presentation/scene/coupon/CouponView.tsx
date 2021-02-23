import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CartViewModel from '../cart/CartViewModel'
import Coupon from '../../../entity/Coupon'
import CouponList from '../../component/couponlist/CouponList'
import CouponViewModel from './CouponViewModel'

type CouponViewPropType = {
    couponViewModel : CouponViewModel;
    cartViewModel: CartViewModel;
    handleToggleCoupon: (coupon: Coupon) => void;
}

const CouponView = ({couponViewModel, cartViewModel, handleToggleCoupon}: CouponViewPropType) => {

    return (
        <View style={styles.container}>
            <View style={styles.couponViewHeader}>
                <Text style={styles.couponViewHeaderText}>내 쿠폰 목록</Text>
            </View>
            <CouponList couponViewModel={couponViewModel} cartViewModel={cartViewModel} handleToggleCoupon={handleToggleCoupon}/>
        </View>
    )
}

export default CouponView

const styles = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(235,235,235)'
    }, 
    couponViewHeader: {
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 10,
        borderBottomColor: 'rgb(115,115,115)',
        // borderBottomWidth: .5,
        width: 100
    },
    couponViewHeaderText: {
        fontSize: 14,
        fontWeight: '700',
        color: 'rgb(240,140,73)',
    }

})
