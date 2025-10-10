import { useTheme } from '@/src/hooks/useTheme'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ThemedText } from '../ThemedText'

interface ChoiseListProps {
    title: string,
    onPress: () => void
}

const ChoiseList = ({ title, onPress }: ChoiseListProps) => {
    const { theme } = useTheme()
    return (
        <TouchableOpacity style={styles.listContainer} onPress={onPress}>
            <ThemedText type='defaultBold' >{title}</ThemedText>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.text} />
        </TouchableOpacity>
    )
}

export default ChoiseList

const styles = StyleSheet.create({
    listContainer: {
        // borderWidth: 1,
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})