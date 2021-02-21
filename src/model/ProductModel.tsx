import IProductModel from "./IProductModel";
import Product from "../entity/Product";
import productData from '../ex_json/productData';

export default class ProductModel implements IProductModel{
    products: Product[];
    constructor(){
        this.products =  this.sortByScore(productData);
    }
    
    getProducts = (page: number) => {
        return productData.slice(page*5,(page*5)+5);
    }

    sortByScore = (products: Product[]) => {
        return products.sort(((prevProduct: Product,nextProduct: Product)=> (nextProduct.score??0) - (prevProduct.score?? 0)))
    }

}