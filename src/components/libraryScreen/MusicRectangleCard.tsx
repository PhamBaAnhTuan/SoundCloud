import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ThemedText'

import { useTheme } from '@/src/hooks/useTheme'
import { formatNumber, formatTimeLine } from '@/src/utils/formatNumber'
import { Entypo, FontAwesome5 } from '@expo/vector-icons'

interface MusicRectangleCardProps {
    img: any,
    title: string,
    artist: string,
    listenCount: number,
    timeLine: number
}

const MusicRectangleCard = ({ img, title, artist, listenCount, timeLine }: MusicRectangleCardProps) => {
    const { theme } = useTheme()
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: img }} style={styles.imgContainer} />
            <View style={styles.contentContainer}>
                <ThemedText type='largeBold'>{title}</ThemedText>
                <ThemedText type='default'>{artist}</ThemedText>
                <View style={styles.detailContainer}>
                    <FontAwesome5 name="play" size={13} color={theme.text} />
                    <ThemedText type='small'>{formatNumber(listenCount)}</ThemedText>
                    <ThemedText type='small'>{formatTimeLine(timeLine)}</ThemedText>
                </View>
            </View>
            <TouchableOpacity style={styles.iconContainer}>
                <Entypo name="dots-three-horizontal" size={17} color={theme.text} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default MusicRectangleCard

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        height: 70,
        width: '100%',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imgContainer: {
        height: 70,
        width: 70,
        borderRadius: 10,
    },
    contentContainer: {
        // borderWidth: 1,
        height: '100%',
        width: '65%',
        justifyContent: 'space-around'
    },
    detailContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    iconContainer: {
        // borderWidth: 1,
        height: '100%',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})