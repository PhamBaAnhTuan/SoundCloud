import { constants } from '@/src/constants/constants'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface TextProps {
    content: string,
    size: "small" | "medium" | "large"
}

const ThemedText = (props: TextProps) => {
    const { small, medium, large } = constants
    const fontSizeMap = {
        small,
        medium,
        large,
    }
    return (
        <Text style={{ fontSize: fontSizeMap[props.size] }}></Text>
    )
}

export default ThemedText

const styles = StyleSheet.create({})