import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import CartItem from '../../../entity/CartItem'
import { Formatter } from '../../util/formatter'
import Icon from '../common/Icon'
import Product from '../../../entity/Product'

type ProductListItemPropType = {
    item: Product;
    toggleAddToCart: (product: CartItem) => boolean;
}

const ProductListItem = ({ item, toggleAddToCart }: ProductListItemPropType) => {
    const [isInCart, setIsInCart] = useState(false);

    const getFormattedPrice = (price: number) => {
        return Formatter.decimal(price);
    }

    const handleAddToCart = () => {
        let toggleResult = toggleAddToCart(item as CartItem)
        if (toggleResult !== false) {
            setIsInCart(!isInCart);
        } else {
            Alert.alert('', '최대 3개만 선택할 수 있습니다.')
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.thumbnailImage} source={{ uri: item.coverImage }} />
            <View style={styles.productContent}>
                <Text style={styles.productTitleText}>{item.title}</Text>
                <View style={styles.productScoreBox}>
                    <Icon size={8} name={'heart'} color={'rgb(125,125,125)'} />
                    <Text style={styles.productScoreText}>{item.score}</Text>
                </View>
                <View style={styles.productPriceBox}>
                    <Text style={styles.productPriceText}>{getFormattedPrice(item.price ?? 0)}</Text>
                    {item.availableCoupon === false && <Text style={styles.noCouponText}>쿠폰 적용 불가능</Text>}
                </View>
            </View>
            <TouchableOpacity style={{ ...styles.addCartButton, backgroundColor: !isInCart ? 'rgb(225,225,225)' : 'rgb(240,140,73)' }} onPress={handleAddToCart}>
                <Text style={{...styles.addCartButtonText,color:!isInCart? 'rgb(240,140,73)':'rgb(225,225,225)'}}>{isInCart ? '빼기' : '담기'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 240,
    },
    thumbnailImage: {
        width: '100%',
        height: 98,
    },
    productContent: {
        padding: 5,
    },
    productTitleText: {
        fontSize: 14,
        fontWeight: '700'
    },
    productScoreBox: {
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical:5
    },
    productScoreText: {
        fontSize: 10,
        color: 'rgb(125,125,125)',
        marginLeft:3,
        paddingBottom:2
    },
    productPriceBox: {
        flexDirection: 'row'
    },
    productPriceText: {
        fontSize: 16,
        fontWeight: '900'
    },
    addCartButton: {
        width: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5
    },
    addCartButtonText: {
        color: 'rgb(255,255,255)',
        textAlign:'center',
        fontSize: 12,
        fontWeight: '700'
    },
    noCouponText: {
        fontSize: 12,
        lineHeight: 16,
        marginLeft: 5,
        color: 'rgb(236,86,59)'
    }
})
