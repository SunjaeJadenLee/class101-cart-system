import { useState } from "react";
import ProductModel from "../model/ProductModel";
import ProductViewModel from "../presentation/scene/product/ProductViewModel";

const ProductProvider = () => {
    const productModel : ProductModel = new ProductModel();
    const [productViewModel] = useState(new ProductViewModel(productModel));

    return (

    )
}

export default ProductProvider