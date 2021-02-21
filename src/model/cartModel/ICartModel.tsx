import Product from "../../entity/Product";

export default interface ICartModel {
    products: Product[];

    addProduct: (product: Product) => void;
}