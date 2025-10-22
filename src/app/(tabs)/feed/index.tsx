import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
// hooks
import FlatCard from '@/src/components/feedScreen/FlatCard'
import { albums } from '@/src/constants/data'
import { useTheme } from '@/src/hooks/useTheme'
import { router } from 'expo-router'



const FeedScreen = () => {
    const { theme } = useTheme()
    const data = albums[1].albums.concat(albums[0].albums)

    const [isLiked, setIsLiked] = useState(false)
    const handleLiked = () => setIsLiked(!isLiked)

    return (
        <FlatList
            pagingEnabled
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={item =>
                <FlatCard
                    backgroundImg={item.item.img}
                    trackName={item.item.name}
                    artistAvatar={item.item.img}
                    artistName={item.item.artist}
                    isFollow={true}
                    like={999}
                    isLiked={isLiked}
                    setIsLiked={handleLiked}
                    comment={23198}
                    openComment={() => router.push('/(tabs)/feed/comment')}
                />
            }
        ></FlatList>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})