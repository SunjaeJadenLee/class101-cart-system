import React, { useState } from "react"

import ProductView from "../ProductView"
import ProductViewModel from "../ProductViewModel"

type ProductControllerPropType = {
    productViewModel: ProductViewModel;
}

const ProductController = ({productViewModel}:ProductControllerPropType) => {
    const [page,setPage] = useState(0);

    return(
        <ProductView products={productViewModel.getProducts(page)}/>
    )

}

export default ProductController