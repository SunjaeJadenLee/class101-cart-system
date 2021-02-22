import CartViewModel from "../presentation/scene/cart/CartViewModel";
import ProductController from "../presentation/scene/product/controller/ProductController";
import ProductModel from "../model/productModel/ProductModel";
import ProductViewModel from "../presentation/scene/product/ProductViewModel";
import React from 'react'
import { useState } from "react";

const ProductProvider = ({}) => {
    const productModel : ProductModel = new ProductModel();
    const [productViewModel] = useState(new ProductViewModel(productModel));
    const [cartViewModel] = useState(new CartViewModel());
  
    return (
        <ProductController productViewModel={productViewModel} cartViewModel={cartViewModel}/>
    )
}

export default ProductProvider