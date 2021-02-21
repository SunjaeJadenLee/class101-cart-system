import CartItem from "../../entity/CartItem";
import ICartModel from "./ICartModel";
import Product from "../../entity/Product";

export default class CartModel implements ICartModel {
    products: CartItem[] = [];
    
    addProduct = (product: CartItem) => {
        product.amount = 1;
        this.products.push(product);
    };

}