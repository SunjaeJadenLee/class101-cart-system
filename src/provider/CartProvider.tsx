import React, { useEffect, useState } from 'react';

import CartController from '../presentation/scene/cart/controller/CartController';
import CartViewModel from '../presentation/scene/cart/CartViewModel';

type CartProviderPropType = {
    navigation: any;
    route: any;
}

const CartProvider = ({navigation,route} : CartProviderPropType) => {
    const [cartViewModel] = useState(route.params.cartViewModel?route.params.cartViewModel:new CartViewModel());

    return(
        <CartController cartViewModel={cartViewModel}/>
    )
}

export default CartProvider