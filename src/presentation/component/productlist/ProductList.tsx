import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import CartViewModel from '../../scene/cart/CartViewModel'
import MoreButton from '../common/MoreButton'
import Product from '../../../entity/Product'
import ProductListItem from './ProductListItem'
import ProductViewModel from '../../scene/product/ProductViewModel'

type ProductListPropType = {
    viewModel: ProductViewModel;
    cartViewModel: CartViewModel;
    handleAddToCartItem: (product: Product) => boolean;
} 

const ProductList = ({ viewModel, handleAddToCartItem }: ProductListPropType) => {
    const [isUpdated, setUpdated] = useState(0);

    const handleClickMoreButton = () => {
        viewModel.getProducts();
        setUpdated(isUpdated + 1);
    }

    const toggleAddToCart = (product: Product) => {
        let toggleResult = handleAddToCartItem(product);
        setUpdated(isUpdated - 1);
        return toggleResult
    }

    return (
        <View style={{flex:1}}>
            <FlatList
                numColumns={2}
                data={viewModel.products}
                renderItem={({item})=><ProductListItem item={item} toggleAddToCart={toggleAddToCart}/>}
                ListFooterComponent={viewModel.isLastPage ? null : <MoreButton handleClickMoreButton={handleClickMoreButton} />}
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({})
