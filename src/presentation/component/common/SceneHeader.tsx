import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { useNavigation } from '@react-navigation/native'

type SceneHeaderPropType = {
    title: string;
    isCartScene: boolean;
    numOfProduct: number;
    handleNavigation: () => void;
}

const SceneHeader = ({ title, isCartScene, numOfProduct, handleNavigation }:SceneHeaderPropType) => {

    return (
        <View style={styles.container}>
            {isCartScene && <TouchableOpacity onPress={handleNavigation} style={styles.goBackContainer}>
                <Text>goBack</Text>
            </TouchableOpacity>}
            <Text>{title} {isCartScene && `(${numOfProduct})`}</Text>
            {!isCartScene && <TouchableOpacity onPress={handleNavigation} style={styles.noOfProductContainer}>
                <Text style={styles.noOfProductText}>{numOfProduct}</Text>
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
    },
    noOfProductText: {

    },
    goBackContainer: {
        position: 'absolute',
        left: 20
    }
})
