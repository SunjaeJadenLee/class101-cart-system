import CartItem from "../../../entity/CartItem";
import CartModel from "../../../model/cartModel/CartModel";
import Coupon from "../../../entity/Coupon";

export default class CartViewModel {
    products: CartItem[] = [];
    readonly limit: number = 3;
    coupons: Coupon[] = [];

    addProduct = (product: CartItem) => {
        const isAdded = this.products.filter((prod:CartItem) => product.id !== prod.id);
        if(isAdded.length !== this.products.length){
            this.products = isAdded;
            return true;
        } else {
            if(this.checkOverLimit()){
                product.amount = 1;
                product.isActive = true;
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
            if(cartItem.isActive){
                totalPrice = totalPrice + (cartItem.amount ?? 1) * (cartItem.price ?? 0)
            }
        })
        return totalPrice
    }

    toggleCoupon = (coupon: Coupon) => {
        const isAdded = this.coupons.filter((coup: Coupon)=>coup.title == coupon.type);
        if(isAdded.length !== this.coupons.length){
            this.coupons = isAdded
        } else {
            this.coupons.push(coupon);
        }
    }
}