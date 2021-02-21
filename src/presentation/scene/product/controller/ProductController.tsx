import React, { useCallback, useEffect, useState } from "react"

import ProductView from "../ProductView"
import ProductViewModel from "../ProductViewModel"

type ProductControllerPropType = {
    productViewModel: ProductViewModel;

}

const ProductController = ({ productViewModel }: ProductControllerPropType) => {

    const handleGetProduct = () => {
        productViewModel.getProducts();
    }

    return (
        <ProductView viewModel={productViewModel} handleGetProduct={handleGetProduct}/>
    )

}

export default ProductController