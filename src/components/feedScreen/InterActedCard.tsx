import { useTheme } from '@/src/hooks/useTheme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import CircleImage from '../CircleImage'
import { ThemedText } from '../ThemedText'
import { TouchableText } from '../TouchableText'

interface InterActedCardProps {
    userAvatar: string,
    userName: string,
    time?: string,
}

const InterActedCard = ({ userAvatar, userName, time }: InterActedCardProps) => {
    const { theme } = useTheme()
    return (
        <View style={styles.container}>
            <CircleImage
                image={{ uri: userAvatar }}
                size='tiny'
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ThemedText type='smallBold'>{userName}</ThemedText>
                <ThemedText type='small'> at </ThemedText>
                <TouchableText style={{
                    backgroundColor: theme.card, color: theme.primary,
                    borderRadius: 10, paddingHorizontal: 7, paddingVertical: 2
                }} type='defaultBold'>{time}</TouchableText>
            </View>
        </View>
    )
}

export default InterActedCard

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
    }
})