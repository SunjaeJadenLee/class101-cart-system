import ProductModel from "../../../model/ProductModel";

export default class ProductViewModel {
    productModel: ProductModel;
    
    constructor(productModel: ProductModel){
        this.productModel = productModel;
    }

    getProducts = (page: number) => {
        return this.productModel.getProducts(page);
    }
}