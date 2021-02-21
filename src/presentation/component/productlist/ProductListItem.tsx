import { Image, StyleSheet, Text, View } from 'react-native'

import { Formatter } from '../../util/formatter'
import Product from '../../../entity/Product'
import React from 'react'

type ProductListItemPropType = {
    item: Product;
}

const ProductListItem = ({item}:ProductListItemPropType) => {

    const getFormattedPrice = (price: number) => {
        return Formatter.decimal(price);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.thumbnailImage} source={{ uri: item.coverImage }} />
            <View>
                <Text>{item.title}</Text>
                <Text>{getFormattedPrice(item.price ?? 0)}</Text>
            </View>
        </View>
    )
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 200
    },
    thumbnailImage: {
        width: '100%',
        height: 100
    }
})
