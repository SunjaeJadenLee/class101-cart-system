import CartModel from "../../../model/cartModel/CartModel";
import Product from "../../../entity/Product";

export default class CartViewModel {
    products: Product[] = [];

    addProduct = (product: Product) => {
        const isAdded = this.products.filter((prod:Product) => product.id !== prod.id);
        if(isAdded.length !== this.products.length){
            this.products = isAdded;
        } else {
            this.products.push(product);
        }
    }

    getNumOfProduct = () => {
        return this.products.length;
    }
}