import React, { useState } from 'react';

import CartController from '../presentation/scene/cart/controller/CartController';
import CartViewModel from '../presentation/scene/cart/CartViewModel';

const CartProvider = () => {
    const [cartViewModel] = useState(new CartViewModel());
    
    return(
        <CartController cartViewModel={cartViewModel}/>
    )
}

export default CartProvider