import ProductView from "../ProductView"
import ProductViewModel from "../ProductViewModel"
import React from "react"

type ProductControllerPropType = {
    productViewModel: ProductViewModel;
}

const ProductController = ({productViewModel}:ProductControllerPropType) => {
    

    return(
        <ProductView products={productViewModel.getProducts()}/>
    )

}

export default ProductController