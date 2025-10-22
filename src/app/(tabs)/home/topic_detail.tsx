import MusicRectangleCard from '@/src/components/libraryScreen/MusicRectangleCard'
import { ThemedButton } from '@/src/components/ThemedButton'
import { ThemedText } from '@/src/components/ThemedText'
import { albums } from '@/src/constants/data'
import { useCommonContext } from '@/src/context/CommonContext'
import { useTheme } from '@/src/hooks/useTheme'
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

const TopicDetail = () => {
    const { theme } = useTheme()
    const { topicTitle, topicImg } = useCommonContext()
    const log = () => console.log(topicTitle)
    return (
        <View style={{ flex: 1, backgroundColor: theme.background, paddingHorizontal: 10 }}>
            <ScrollView >
                <View style={styles.topicBannerContainer}>
                    <Image
                        style={styles.topicImg}
                        source={{ uri: topicImg }}
                        resizeMode='cover'
                    />
                    <View style={styles.detailContainer}>
                        <ThemedText type='subtitle'>{topicTitle}</ThemedText>
                        <ThemedText>Playlist · 50 tracks · 2:35:43</ThemedText>
                        <TouchableOpacity style={styles.ownerPlaylistContainer}>
                            <Image
                                style={styles.ownerAvatar}
                                source={require('@/src/assets/images/SZA.jpg')}
                                resizeMode='cover'
                            />
                            <ThemedText type='largeBold'>Trending Music</ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.interActContainer}>
                    <View style={styles.leftContainer}>
                        <TouchableOpacity style={styles.likeContainer} onPress={log}>
                            <FontAwesome name="heart-o" size={24} color={theme.text} />
                            <ThemedText type='defaultBold'>3248</ThemedText>
                        </TouchableOpacity>
                        <ThemedButton >
                            <Entypo name="dots-three-horizontal" size={21} color={theme.text} />
                        </ThemedButton>
                    </View>
                    <View style={styles.leftContainer}>
                        <TouchableOpacity >
                            <FontAwesome name="random" size={21} color={theme.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <AntDesign name="play-circle" size={40} color={theme.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <ThemedText style={{ marginBottom: 10 }}>{topicTitle} songs on SoundCloud, Updates weekly with popular tracks in Viet Nam</ThemedText>
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
                            title={item.name} artist={item.artist}
                            listenCount={997781}
                            timeLine={258}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default TopicDetail

const styles = StyleSheet.create({
    topicBannerContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        height: 130,
        width: '100%',
        gap: 10,
        marginVertical: 10
    },

    topicImg: {
        // borderWidth: 1,
        height: 130,
        width: 130,
        // marginHorizontal: 10
    },

    detailContainer: {
        // borderWidth: 1,
        height: '100%',
        width: 'auto',
        justifyContent: 'space-evenly',
    },
    ownerPlaylistContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    ownerAvatar: {
        height: 40,
        width: 40,
        borderRadius: '50%'
    },


    interActContainer: {
        // borderWidth: 1,
        height: 'auto',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
    },

    leftContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    likeContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
})