import CartItem from "../../entity/CartItem";
import Product from "../../entity/Product";

export default interface ICartModel {
    products: CartItem[];

    addProduct: (product: CartItem) => void;
}