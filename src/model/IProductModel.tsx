import Product from "../entity/Product";

export default interface IProductModel {
    products: Product[];
    getProducts: () => Product[];
}