import React, { useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// hooks
import { useTheme } from '@/src/hooks/useTheme'
// components
import MusicList from '@/src/components/searchScreen/MusicList'
import RecentlySearch from '@/src/components/searchScreen/RecentSearch'
import SearchInput from '@/src/components/searchScreen/SearchInput'
import SearchRecommend from '@/src/components/searchScreen/SearchRecommend'
import { albums } from '@/src/constants/data'
import { normalizeString } from '@/src/utils/normalizeString'


const SearchScreen = () => {
    const { theme } = useTheme()
    const [searching, setSearching] = useState(false);
    const [pattern, setPattern] = useState("");
    const [filtered, setFiltered]: any = useState({});

    useEffect(() => {
        const album = albums[0].albums.map(alb => alb)
        const normalizedSearch = normalizeString(pattern);
        const filteredData = album?.filter(alb =>
            normalizeString(alb?.name || '').includes(normalizedSearch)
        );
        setFiltered(filteredData);
    }, [pattern, albums]);
    const log = () => console.log(
        'pattern: ', pattern,
        'album', albums
    )
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background, paddingHorizontal: 7 }}>
            <SearchInput
                pattern={pattern}
                setPattern={setPattern}
                searching={searching}
                setSearching={setSearching}
            />
            <ScrollView>
                {pattern
                    ? <RecentlySearch>
                        {filtered ? filtered.map((item: any, index: number) => (
                            <MusicList
                                key={index}
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
                <Button title='LOG' onPress={log}></Button>
            </ScrollView>
        </SafeAreaView>
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