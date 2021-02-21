import Product from "./Product";

export default class CartItem extends Product {
    amount?: number;
    isActive: boolean = true;
}