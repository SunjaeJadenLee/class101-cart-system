import CartModel from "../../../model/cartModel/CartModel";
import Product from "../../../entity/Product";

export default class CartViewModel {
    products: Product[] = [];
    readonly limit: number = 3;

    addProduct = (product: Product) => {
        const isAdded = this.products.filter((prod:Product) => product.id !== prod.id);
        if(isAdded.length !== this.products.length){
            this.products = isAdded;
        } else {
            if(this.checkOverLimit()){
                this.products.push(product);
            } else {
                return false
            }
        }
    }

    getNumOfProduct = () => {
        return this.products.length;
    }

    checkOverLimit = () => {
        return this.getNumOfProduct() < this.limit
    }
}