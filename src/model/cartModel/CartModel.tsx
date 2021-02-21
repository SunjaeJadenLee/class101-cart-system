import ICartModel from "./ICartModel";
import Product from "../../entity/Product";

export default class CartModel implements ICartModel {
    products: Product[] = [];
    
    addProduct = (product: Product) => {
        this.products.push(product);
    };

}