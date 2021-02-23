import { Calculator } from "../../util/calculator";
import CartItem from "../../../entity/CartItem";
import CartModel from "../../../model/cartModel/CartModel";
import Coupon from "../../../entity/Coupon";

const { getRatedValue, getSubstractedValue } = Calculator;
export default class CartViewModel {
    products: CartItem[] = [];
    readonly limit: number = 3;
    coupon?: Coupon ;
    totalPrice: number = 0;
    discountAmount: number = 0;
    discountedTotalPrice: number = 0;

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
        this.totalPrice = totalPrice
        return totalPrice
    }

    getDiscountAmount= () => {
        let discountAmount = 0;
        if(!this.coupon) return 0;

        this.products.map((cartItem: CartItem) => {
            if(cartItem.availableCoupon !== false) {
                    discountAmount = discountAmount + (((cartItem.price ?? 0) - this.applyCouponPrice(this.coupon!,cartItem.price ?? 0)) * (cartItem.amount ?? 0))
            }
        })
        this.discountAmount = discountAmount
        return discountAmount
    }

    getDiscountedTotalPrice = () => {
        return this.totalPrice - this.discountAmount
    }

    applyCouponPrice = (coupon: Coupon,price: number) => {
        if(coupon.type === 'rate'){
            return getRatedValue(coupon.discountRate ?? 0,price)
        } 
        else if(coupon.type === 'amount'){
            return getSubstractedValue(coupon.discountAmount ?? 0,price)
        } else {
            return price
        }
    }

    toggleCoupon = (coupon: Coupon) => {
       this.coupon = coupon;
    }
}