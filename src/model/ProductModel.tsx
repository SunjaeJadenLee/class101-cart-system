import IProductModel from "./IProductModel";
import Product from "../entity/Product";
import productData from '../ex_json/productData';

export default class ProductModel implements IProductModel{
    
    getProducts = (page: number) => {
        return productData.slice(page*5,(page*5)+5);
    }

}