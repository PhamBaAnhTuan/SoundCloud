import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
// hooks
import { useTheme } from '@/src/hooks/useTheme'
// components
import MusicList from '@/src/components/searchScreen/MusicList'
import RecentlySearch from '@/src/components/searchScreen/RecentSearch'
import SearchRecommend from '@/src/components/searchScreen/SearchRecommend'
import { albums } from '@/src/constants/data'
import { useCommonContext } from '@/src/context/CommonContext'
import { useLayout } from '@/src/hooks/useLayout'
import { normalizeString } from '@/src/utils/normalizeString'

const SearchScreen = () => {
    const { theme } = useTheme()
    const { contentHeight } = useLayout()
    const { pattern } = useCommonContext()
    const [filtered, setFiltered]: any = useState({});

    const album1 = albums[0].albums.map(alb => alb)
    const album2 = albums[1].albums.map(alb => alb)
    const album3 = albums[2].albums.map(alb => alb)
    const albumFinal = album1.concat(album2, album3)
    useEffect(() => {
        const normalizedSearch = normalizeString(pattern);
        const filteredData = albumFinal?.filter(alb =>
            normalizeString(alb?.name || '').includes(normalizedSearch)
        );
        setFiltered(filteredData);
    }, [pattern, albums]);

    const log = () => console.log(
        'pattern: ', pattern,
    )
    return (
        <View style={{ backgroundColor: theme.background }} >
            <ScrollView>
                {pattern
                    ? <RecentlySearch>
                        {filtered ? filtered.map((item: any, index: number) => (
                            <MusicList
                                key={index}
                                onPress={log}
                                musicImg={item.img}
                                title={item.name}
                                artist={item.artist}
                            />
                        ))
                            : undefined
                        }
                    </RecentlySearch>
                    : <SearchRecommend />
                }
            </ScrollView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    topicContainer: {
        borderWidth: 1,
        // flexWrap: 'wrap',
        // flexDirection: 'row'
    }
})