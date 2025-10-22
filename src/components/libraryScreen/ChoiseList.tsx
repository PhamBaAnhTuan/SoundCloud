import { useTheme } from '@/src/hooks/useTheme'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ChoiseList = () => {
    const { theme } = useTheme()
    return (
        <View style={styles.listContainer}>
            <Text>Your likes</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.text} />
        </View>
    )
}

export default ChoiseList

const styles = StyleSheet.create({
    listContainer: {
        // flex: 1,
        // borderWidth: 1,
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})