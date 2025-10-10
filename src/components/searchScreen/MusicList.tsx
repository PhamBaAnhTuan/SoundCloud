import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../ThemedText'

interface MusicListProps {
    musicImg: any,
    title: string,
    artist: string,
    onPress: () => void
}

const MusicList = ({ musicImg, title, artist, onPress }: MusicListProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: musicImg }} style={styles.musicImg} />
            <View style={styles.contentContainer}>
                <ThemedText type='largeBold'>{title}</ThemedText>
                <ThemedText type='default'>{artist}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}

export default MusicList

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    musicImg: {
        height: 55,
        width: 55,
        borderRadius: 10
    },
    contentContainer: {
        // borderWidth: 1,
        height: '100%',
        width: '85%',
        paddingLeft: 10,
        justifyContent: 'center'
    }
})