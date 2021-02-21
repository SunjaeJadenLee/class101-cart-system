import ProductModel from "../../../model/ProductModel";

export default class ProductViewModel {
    productModel: ProductModel;
    
    constructor(productModel: ProductModel){
        this.productModel = productModel;
    }

    getProducts = () => {
        return this.productModel.getProducts();
    }
}