import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
// hooks
import FlatCard from '@/src/components/feedScreen/FlatCard'
import { albums } from '@/src/constants/data'
import { useLayout } from '@/src/hooks/useLayout'
import { useTheme } from '@/src/hooks/useTheme'



const FeedScreen = () => {
    const { theme, mode } = useTheme()
    const { contentHeight } = useLayout()
    const data = albums[1].albums.concat(albums[0].albums)

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
                    like={231273}
                    comment={23198}

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