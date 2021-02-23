import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Icons from './Icon'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

type SceneHeaderPropType = {
    title: string;
    isCartScene: boolean;
    numOfProduct: number;
    handleNavigation: () => void;
}

const SceneHeader = ({ title, isCartScene, numOfProduct, handleNavigation }:SceneHeaderPropType) => {

    const handleDifferIconStyle = (number: number) => {
        return number !== 0 ? {backgroundColor:'rgb(240,140,73)',color:'rgb(245,245,245)'} : {backgroundColor:'rgb(245,245,245)',color:'rgb(240,140,73)'} 
    }

    return (
        <View style={styles.container}>
            {isCartScene && <TouchableOpacity onPress={handleNavigation} style={styles.goBackContainer}>
                <Icons size={20} color={'rgb(115,115,115)'} name={'angle-left'}/>
            </TouchableOpacity>}
            <Text style={styles.headerText}>{title} {isCartScene && `(${numOfProduct})`}</Text>
            {!isCartScene && <TouchableOpacity onPress={handleNavigation} style={[styles.noOfProductContainer,handleDifferIconStyle(numOfProduct)]}>
                <Text style={[styles.noOfProductText,handleDifferIconStyle(numOfProduct)]}>{numOfProduct}</Text>
            </TouchableOpacity>}
        </View>
    )
}

export default SceneHeader

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noOfProductContainer: {
        position: 'absolute',
        right: 20,
        width: 25,
        height: 25,
        borderRadius: 12.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: '900'
    },
    noOfProductText: {
        fontSize: 14,
        fontWeight: '500',
        textAlign:'center',
        color: 'rgb(245,245,245)'
    },
    goBackContainer: {
        position: 'absolute',
        left: 20
    }
})
