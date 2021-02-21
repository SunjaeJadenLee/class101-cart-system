import { Image, StyleSheet, Text, View } from 'react-native'

import Product from '../../../entity/Product'
import React from 'react'

type CartListItemPropType = {
    item: Product;

}

const CartListItem = ({item}: CartListItemPropType) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:item.coverImage}} style={styles.thumbnailImage}/>
            <Text style={styles.titleText}>{item.title}</Text>
        </View>
    )
}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 400
    },
    thumbnailImage: {
        width:'100%',
        height: 300
    },
    titleText: {

    }
})
