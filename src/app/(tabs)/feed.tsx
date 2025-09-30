import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// hooks
import { useTheme } from '@/src/hooks/useTheme'

const FeedScreen = () => {
    const { theme, mode } = useTheme()
    return (
        <SafeAreaView style={{ flex: 1, padding: 5, backgroundColor: theme.background }}>
            <Text>feed</Text>
        </SafeAreaView>
    )
}

export default FeedScreen

const styles = StyleSheet.create({})