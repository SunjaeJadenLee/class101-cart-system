import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import CartItem from '../../../entity/CartItem'
import { Formatter } from '../../util/formatter'
import Product from '../../../entity/Product'

type ProductListItemPropType = {
    item: Product;
    toggleAddToCart: (product:CartItem) => boolean;
}

const ProductListItem = ({item,toggleAddToCart}:ProductListItemPropType) => {
    const [isInCart,setIsInCart] = useState(false);

    const getFormattedPrice = (price: number) => {
        return Formatter.decimal(price);
    }

    const handleAddToCart = () => {
        let toggleResult = toggleAddToCart(item as CartItem)
        if(toggleResult !== false){
            setIsInCart(!isInCart);
        } else {
            Alert.alert('','최대 3개만 선택할 수 있습니다.')
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.thumbnailImage} source={{ uri: item.coverImage }} />
            <View>
                <Text>{item.title}</Text>
                <Text>{item.score}</Text>
                <Text>{getFormattedPrice(item.price ?? 0)}</Text>
                {item.availableCoupon === false && <Text>쿠폰 x</Text>}
            </View>
            <TouchableOpacity onPress={handleAddToCart}>
                <Text>{isInCart?'added':'cart'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 200,
    },
    thumbnailImage: {
        width: '100%',
        height: 100
    }
})
