import { StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

type IconPropType = {
    size: number;
    name: string;
    color: string;
}

const Icons = ({size,name,color}:IconPropType) => {
    return (
        <Icon size={size} name={name} color={color}/>
    )
}

export default Icons

const styles = StyleSheet.create({})
