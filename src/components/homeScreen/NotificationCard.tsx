import { useTheme } from '@/src/hooks/useTheme'
import React from 'react'
import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ThemedText'

interface NotificatonListProps {
    followerAvatar: any,
    followerName: string,
    isFollowed: boolean
}

const NotificationCard = ({ followerAvatar, followerName, isFollowed }: NotificatonListProps) => {
    const { theme } = useTheme()
    return (
        <Pressable style={styles.container}>
            <View style={styles.contentContainer}>
                <TouchableOpacity><Image source={{ uri: followerAvatar }} style={styles.imgContainer} /></TouchableOpacity>
                <View style={[styles.contentContainer, { maxWidth: 150 }]}>
                    <ThemedText type='defaultBold'>{followerName} </ThemedText>
                    <ThemedText type='default' >started to follow you</ThemedText>
                </View>
            </View>
            <TouchableOpacity style={[styles.iconContainer, { backgroundColor: theme.card }]}>
                <ThemedText type='defaultBold'>{isFollowed ? 'Following' : 'Follow'}</ThemedText>
            </TouchableOpacity>
        </Pressable>
    )
}

export default NotificationCard

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        height: 70,
        width: '100%',
        marginVertical: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgContainer: {
        height: 60,
        width: 60,
        borderRadius: "50%",
        marginRight: 10
    },
    contentContainer: {
        // borderWidth: 1,
        height: '100%',
        width: 'auto',
        alignItems: 'center',
        flexDirection: 'row'
    },
    detailContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    iconContainer: {
        // borderWidth: 1,
        borderRadius: 5,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center'
    }
})