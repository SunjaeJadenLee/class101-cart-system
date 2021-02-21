import CartItem from "../../../entity/CartItem";
import CartModel from "../../../model/cartModel/CartModel";
import Product from "../../../entity/Product";

export default class CartViewModel {
    products: CartItem[] = [];
    readonly limit: number = 3;

    addProduct = (product: CartItem) => {
        const isAdded = this.products.filter((prod:CartItem) => product.id !== prod.id);
        if(isAdded.length !== this.products.length){
            this.products = isAdded;
            return true;
        } else {
            if(this.checkOverLimit()){
                product.amount = 1;
                this.products.push(product);
                return true;
            } else {
                return false;
            }
        }
    }

    getNumOfProduct = () => {
        return this.products.length;
    }

    checkOverLimit = () => {
        return this.getNumOfProduct() < this.limit
    }

    getTotalPrice = () => {
        let totalPrice = 0;
        this.products.map((cartItem: CartItem) => {
            totalPrice = totalPrice + (cartItem.amount ?? 1) * (cartItem.price ?? 0)
        })
        return totalPrice
    }
}