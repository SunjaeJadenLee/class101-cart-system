import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CouponList from '../../component/couponlist/CouponList'
import CouponViewModel from './CouponViewModel'

type CouponViewPropType = {
    couponViewModel : CouponViewModel
}

const CouponView = ({couponViewModel}: CouponViewPropType) => {

    useEffect(()=>{
        console.log(couponViewModel.coupons);
    },[])

    return (
        <View>
            <CouponList couponViewModel={couponViewModel}/>
        </View>
    )
}

export default CouponView

const styles = StyleSheet.create({})
