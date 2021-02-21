import Product from "../../../entity/Product";
import ProductModel from "../../../model/productModel/ProductModel"

export default class ProductViewModel {
    productModel: ProductModel;
    page: number = 0 ;
    isLastPage = false;
    products: Product[] = [];

    constructor(productModel: ProductModel){
        this.productModel = productModel;
        this.getProducts();
    }

    getProducts = () => {
        let list = this.productModel.getProducts(this.page++);
        if(list.length < 5) this.isLastPage = true;

        this.products = [...this.products,...list];
    }
}