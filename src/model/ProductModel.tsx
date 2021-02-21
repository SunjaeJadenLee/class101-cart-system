import IProductModel from "./IProductModel";
import Product from "./Product";
import productData from '../data/productData';

export default class ProductModel implements IProductModel{
    products: Product[] = productData;
    coupons = [];
    
    getProducts = () => {
        return this.products;
    }

}