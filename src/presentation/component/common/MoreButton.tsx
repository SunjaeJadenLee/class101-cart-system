import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

import React from 'react'

type MoreButtonType = {
    handleClickMoreButton: ()=>void
}

const MoreButton = ({handleClickMoreButton}:MoreButtonType) => {
    return (
            <TouchableOpacity onPress={handleClickMoreButton} style={styles.container}>
                <View style={styles.horizontalPadding}>
                    <Text>더 불러오기</Text>
                </View>
            </TouchableOpacity>
    )
}

export default MoreButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        justifyContent:'center',
        alignItems:'center',
    },
    horizontalPadding: {
        height:50,
        borderTopWidth:.6,
        borderTopColor: 'rgba(0,0,0,0.2)',
        width: '80%',
        justifyContent:'center',
        alignItems:'center'
    }
})
