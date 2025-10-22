import React from 'react'
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
// hooks
import { ThemedButton } from '@/src/components/ThemedButton'
import { ThemedText } from '@/src/components/ThemedText'
import { useLayout } from '@/src/hooks/useLayout'
import { useTheme } from '@/src/hooks/useTheme'
import { formatNumber } from '@/src/utils/formatNumber'
import { AntDesign, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'

interface FeedScreenProps {
    backgroundImg: string,
    like: number,
    comment: number,
    trackName: string,
    artistAvatar: string,
    artistName: string,
    isFollow: boolean,
    timeLine?: number
}

const FlatCard = ({ backgroundImg, like, comment, trackName, artistAvatar, artistName, isFollow }: FeedScreenProps) => {
    const { theme } = useTheme()
    const { contentHeight } = useLayout()
    return (
        <ImageBackground
            style={[styles.backgroundContainer, { height: contentHeight }]}
            source={{ uri: backgroundImg }}
            borderRadius={20}
            resizeMode='cover'
        >
            <View style={styles.likeContainer}>
                <ThemedButton>
                    <FontAwesome name="heart-o" size={24} color={theme.white} />
                    <ThemedText type='smallBold' style={{ color: theme.white }}>{formatNumber(like)}</ThemedText>
                </ThemedButton>
                <ThemedButton>
                    <MaterialCommunityIcons name="comment-text-outline" size={24} color={theme.white} />
                    <ThemedText type='smallBold' style={{ color: theme.white }}>{formatNumber(comment)}</ThemedText>
                </ThemedButton>
                <ThemedButton>
                    <Octicons name="diff-added" size={24} color={theme.white} />
                </ThemedButton>
            </View>
            <View style={[styles.contentContainer, { backgroundColor: theme.card, opacity: 0.9 }]}>
                <View style={styles.artistContainer}>
                    <TouchableOpacity >
                        <ThemedText type='subtitle'>{trackName}</ThemedText>
                    </TouchableOpacity>
                    <View style={styles.artistWrap}>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: artistAvatar }}
                                resizeMode='cover'
                                style={styles.artistAvatar}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ThemedText type='largeBold'>{artistName}</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.followBtn, { backgroundColor: theme.border }]}>
                            <ThemedText type='defaultBold'>{isFollow ? 'Following' : 'Follow'}</ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.playIconContainer}>
                    <AntDesign name="play-circle" size={45} color={theme.icon} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default FlatCard

const styles = StyleSheet.create({
    backgroundContainer: {
        // borderWidth: 1,
        flex: 1,
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
        height: '100%',
        minWidth: '100%',
        justifyContent: 'flex-end'
    },
    backgroundImg: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: 15
    },


    likeContainer: {
        // borderWidth: 1,
        height: 200,
        width: 'auto',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },

    contentContainer: {
        // borderWidth: 1,
        paddingVertical: 5,
        borderRadius: 10,
        height: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    artistContainer: {
        // borderWidth: 1,
        height: '100%',
        width: '75%',
        justifyContent: 'space-around'
    },
    artistWrap: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },

    artistAvatar: {
        height: 45,
        width: 45,
        borderRadius: 50,

    },
    followBtn: {
        height: 'auto',
        width: 'auto',
        padding: 10,
        borderRadius: 40,
        alignItems: 'center'
    },


    playIconContainer: {
        // borderWidth: 1,
        height: '70%',
        width: "15%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})