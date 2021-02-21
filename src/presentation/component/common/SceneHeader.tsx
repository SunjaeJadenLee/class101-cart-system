import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { useNavigation } from '@react-navigation/native'

type SceneHeaderPropType = {
    title: string;
    isCartScene: boolean;
    numOfProduct: number;
}

const SceneHeader = ({ title, isCartScene, numOfProduct }:SceneHeaderPropType) => {
    const navigation = useNavigation();

    const handleNavigation = () => {
        if(isCartScene){
            navigation.goBack();
        } else {
            navigation.navigate('cartScene')
        }
    }

    return (
        <View style={styles.container}>
            {isCartScene&&<TouchableOpacity onPress={handleNavigation} style={styles.goBackContainer}>
                <Text>goBack</Text>
            </TouchableOpacity>}
            <Text>{title}</Text>
            {!isCartScene&&<TouchableOpacity onPress={handleNavigation} style={styles.noOfProductContainer}>
                <Text style={styles.noOfProductText}>{numOfProduct}</Text>
            </TouchableOpacity>}
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

    },
    goBackContainer: {
        position: 'absolute',
        left: 20
    }
})
