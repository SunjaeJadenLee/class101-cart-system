import IProductModel from "./IProductModel";
import Product from "../entity/Product";
import productData from '../ex_json/productData';

export default class ProductModel implements IProductModel{
    
    getProducts = () => {
        return productData;
    }

}