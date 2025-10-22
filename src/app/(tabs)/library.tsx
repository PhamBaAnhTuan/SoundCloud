import { useTheme } from '@/src/hooks/useTheme'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

const LibraryScreen = () => {
    const { theme } = useTheme()
    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <ScrollView>

            </ScrollView>
        </View>
    )
}

export default LibraryScreen

const styles = StyleSheet.create({

})