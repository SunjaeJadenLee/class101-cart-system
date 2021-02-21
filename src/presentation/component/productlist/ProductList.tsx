import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import MoreButton from '../common/MoreButton'
import Product from '../../../entity/Product'
import ProductListItem from './ProductListItem'
import ProductViewModel from '../../scene/product/ProductViewModel'

type ProductListPropType = {
    viewModel: ProductViewModel;
    handleGetProduct: ()=>void;
} 

const ProductList = ({viewModel,handleGetProduct}:ProductListPropType) => {
    const [isUpdated,setUpdated] = useState(0);

    const handleClickMoreButton = () => {
        handleGetProduct();
        setUpdated(isUpdated+1);
    }

    return (
        <FlatList 
            numColumns={2}
            data={viewModel.products}
            renderItem={ProductListItem}
            ListFooterComponent={viewModel.isLastPage?null:<MoreButton handleClickMoreButton={handleClickMoreButton}/>}
        />
    )
}

export default ProductList

const styles = StyleSheet.create({})
