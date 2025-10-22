import { title } from '@/src/constants/title'
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
// components
import ChoiseList from '@/src/components/libraryScreen/ChoiseList'
import MusicRectangleCard from '@/src/components/libraryScreen/MusicRectangleCard'
import { ThemedText } from '@/src/components/ThemedText'
import { albums } from '@/src/constants/data'
import { useTheme } from '@/src/hooks/useTheme'

const LibraryScreen = () => {
    const { theme } = useTheme()

    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <ScrollView>
                {title.map((item, index) => (
                    <ChoiseList
                        key={index}
                        title={item}
                        onPress={null}
                    />
                ))}
                <View style={styles.historyTitleContainer}>
                    <ThemedText type='subtitle' >Listening history</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type='small' >See all</ThemedText>
                    </TouchableOpacity>
                </View>
                {albums[0].albums.map((item, index) => (
                    <MusicRectangleCard
                        key={index}
                        img={item.img}
                        title={item.name} artist={item.artist}
                        listenCount={997781}
                        timeLine={258}
                    />
                ))}
                {albums[1].albums.map((item, index) => (
                    <MusicRectangleCard
                        key={index}
                        img={item.img}
                        title={item.name}
                        artist={item.artist}
                        listenCount={997781}
                        timeLine={258}
                    />
                ))}
                {albums[2].albums.map((item, index) => (
                    <MusicRectangleCard
                        key={index}
                        img={item.img}
                        title={item.name}
                        artist={item.artist}
                        listenCount={997781}
                        timeLine={258}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default LibraryScreen

const styles = StyleSheet.create({
    historyTitleContainer: {
        marginTop: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})