import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

type SceneHeaderPropType = {
    title: string;
    isCartScene: boolean;
    numOfProduct: number;
}

const SceneHeader = ({ title, isCartScene,numOfProduct }:SceneHeaderPropType) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            {!isCartScene&&<View style={styles.noOfProductContainer}>
                <Text style={styles.noOfProductText}>{numOfProduct}</Text>
            </View>}
        </View>
    )
}

export default SceneHeader

const styles = StyleSheet.create({
    container: {
        position:'relative',
        height: 60,
        justifyContent:'center',
        alignItems: 'center',
    },
    noOfProductContainer: {
        position: 'absolute',
        right:20,
    },
    noOfProductText: {

    }
})
