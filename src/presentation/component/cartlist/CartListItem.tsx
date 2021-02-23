import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import CartItem from '../../../entity/CartItem'
import Icons from '../common/Icon'
import { TouchableOpacity } from 'react-native-gesture-handler'

type CartListItemPropType = {
    item: CartItem;
    handlePlusCartItem: (cartItem: CartItem) => void;
    handleMinusCartItem: (cartItem: CartItem) => void;
    handleActiveCartItem: (cartItem: CartItem, isActive: boolean) => void;

}

const CartListItem = ({ item, handlePlusCartItem, handleMinusCartItem, handleActiveCartItem }: CartListItemPropType) => {
    const [isChecked, setChecked] = useState(true);

    const handleClickCheckbox = () => {
        handleActiveCartItem(item, isChecked);
        setChecked(!isChecked);
    }

    return (
        <View style={styles.container}>
            <View style={styles.distintContainer}>
                <Image source={{ uri: item.coverImage }} style={styles.thumbnailImage} />
                <View style={styles.contentContaier}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <View style={styles.amountContainer} >
                        <TouchableOpacity onPress={() => handleMinusCartItem(item)} style={styles.amountButton}>
                            <Text style={styles.amountButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.amountText}>{item.amount}</Text>
                        <TouchableOpacity onPress={() => handlePlusCartItem(item)} style={styles.amountButton}>
                            <Text style={styles.amountButtonText}>+</Text>
                        </TouchableOpacity>
                        {item.availableCoupon === false && <Text style={styles.noCouponText}>{'쿠폰 적용 불가능'}</Text>}
                    </View>
                    <TouchableOpacity onPress={handleClickCheckbox} style={styles.checkbox}>
                        <Text style={styles.checkboxSelectText}>선택</Text>
                        {isChecked?<Icons size={24} color={'rgb(240,140,73)'} name={'check'}/>:<View style={styles.emptyCheckbox}/>}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        paddingHorizontal: 20,
        
    },
    distintContainer:{
        width: '100%',
        borderBottomColor:'rgb(195,195,195)',
        borderBottomWidth:.3,
        flexDirection:'row',
        paddingVertical:20,
    },
    contentContaier:{
        width: 250,
        paddingHorizontal:10,
    },
    thumbnailImage: {
        width: 150,
        height: 100
    },
    titleText: {
        fontSize: 14,
        fontWeight: '700'
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 20
    },
    amountText:{
        fontSize: 14,
        fontWeight: '900',
        textAlign: 'center'
    },
    amountButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'rgb(240,140,73)',
        justifyContent: 'center',
        alignItems: 'center',
        margin:5
    },
    amountButtonText: {
        color:'rgb(245,245,245)',
        fontSize: 16,
        fontWeight:'700'
    },
    checkbox: {
        width: 30,
        height: 30,
        marginLeft:'auto',
        marginRight:20,
        borderWidth: .5,
        borderColor: 'rgb(195,195,195)',
        justifyContent:'center',
        alignItems:'center'
    },
    emptyCheckbox: {
        width:24,
        height:24,
    },
    checkboxSelectText:{
        backgroundColor:'rgb(245,245,245)',
        fontSize:10,
        marginTop:-5,
        color:'rgb(115,115,115)',
        paddingHorizontal:2,
    },
    noCouponText: {
        fontSize: 12,
        color: 'rgb(236,86,59)',
    }
})
