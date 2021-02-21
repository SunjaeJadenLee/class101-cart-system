import React, { useCallback, useEffect, useState } from "react"

import CartViewModel from "../../cart/CartViewModel"
import Product from "../../../../entity/Product"
import ProductView from "../ProductView"
import ProductViewModel from "../ProductViewModel"

type ProductControllerPropType = {
    productViewModel: ProductViewModel;
    cartViewModel: CartViewModel;

}

const ProductController = ({ productViewModel, cartViewModel }: ProductControllerPropType) => {
    const [numOfCartItem,setNumOfcartItem] = useState(cartViewModel.getNumOfProduct());

    const handleAddToCartitem = (product: Product) => {
        let addResult = cartViewModel.addProduct(product);
        setNumOfcartItem(cartViewModel.getNumOfProduct());
        return addResult
    }

    return (
        <ProductView viewModel={productViewModel} cartViewModel={cartViewModel} numOfCartItem={numOfCartItem} handleAddToCartItem={handleAddToCartitem}/>
    )

}

export default ProductController