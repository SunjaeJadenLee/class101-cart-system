import Product from "../../entity/Product";

export default interface IProductModel {
    getProducts: (page: number) => Product[];
}