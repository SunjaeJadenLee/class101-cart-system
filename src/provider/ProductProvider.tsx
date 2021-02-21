import ProductController from "../presentation/scene/product/controller/ProductController";
import ProductModel from "../model/productModel/ProductModel";
import ProductViewModel from "../presentation/scene/product/ProductViewModel";
import React from 'react'
import { useState } from "react";

const ProductProvider = ({}) => {
    const productModel : ProductModel = new ProductModel();
    const [productViewModel] = useState(new ProductViewModel(productModel));
  
    return (
        <ProductController productViewModel={productViewModel}/>
    )
}

export default ProductProvider