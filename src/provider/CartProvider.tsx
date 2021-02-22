import React, { useEffect, useState } from 'react';

import CartController from '../presentation/scene/cart/controller/CartController';
import CartViewModel from '../presentation/scene/cart/CartViewModel';
import CouponModel from '../model/ couponModel/CouponModel';
import CouponViewModel from '../presentation/scene/coupon/CouponViewModel';

type CartProviderPropType = {
    navigation: any;
    route: any;
}

const CartProvider = ({navigation,route} : CartProviderPropType) => {
    const couponModel : CouponModel = new CouponModel();

    const [cartViewModel] = useState(route.params.cartViewModel?route.params.cartViewModel:new CartViewModel());
    const [couponViewModel] = useState(new CouponViewModel(couponModel));

    return(
        <CartController cartViewModel={cartViewModel} couponViewModel={couponViewModel}/>
    )
}

export default CartProvider