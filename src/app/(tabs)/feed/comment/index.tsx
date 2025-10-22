import CommentCard from '@/src/components/feedScreen/CommentCard'
import SearchInput from '@/src/components/searchScreen/SearchInput'
import SquareImage from '@/src/components/SquareImage'
import { ThemedText } from '@/src/components/ThemedText'
import { TouchableText } from '@/src/components/TouchableText'
import { albums } from '@/src/constants/data'
import { useTheme } from '@/src/hooks/useTheme'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

const Comment = () => {
    const { theme } = useTheme()
    return (
        <>
            <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
                <View style={styles.trackInfoContainer}>
                    <TouchableOpacity>
                        <SquareImage
                            image={require('../../../../assets/images/99%.jpg')}
                            size='small'
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'space-evenly' }}>
                        <TouchableOpacity>
                            <ThemedText type='defaultBold'>HipHop</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ThemedText type='defaultBold' style={{ opacity: 0.6 }}>Kendrick</ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.numberOfInterActContainer}>
                    <TouchableText type='smallBold' onPress={() => router.push('/(tabs)/feed/comment/emoji_list')}>
                        4200 emoji
                    </TouchableText>
                    <ThemedText type='smallBold'>3752 comments</ThemedText>
                    <ThemedText type='smallBold'>7327 reposts</ThemedText>
                </View>

                <View>
                    {albums[0].albums.map((item, index) => (
                        <CommentCard
                            key={index}
                            userAvatar={item.img}
                            userName={item.artist}
                            content={item.subscription}
                            likes={236}
                        />
                    ))}
                    {albums[1].albums.map((item, index) => (
                        <CommentCard
                            key={index}
                            userAvatar={item.img}
                            userName={item.artist}
                            content={'Chủ đề đề cập đến các vấn đề lý thuyết cơ bản về nghệ thuật trang trí, tạo hình các yếu tố như đường nét, mảng, màu sắc'}
                            likes={236}
                        />
                    ))}
                </View>
            </ScrollView>
            <View style={[styles.commentInputContainer, { backgroundColor: theme.background }]}>
                <View style={styles.patternCommentsContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <TouchableOpacity style={styles.parttenCardContainer}>
                            <ThemedText>I love thi</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.parttenCardContainer}>
                            <ThemedText>I love this</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.parttenCardContainer}>
                            <ThemedText>I love this</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.parttenCardContainer}>
                            <ThemedText>I love this</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.parttenCardContainer}>
                            <ThemedText>I love this</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.parttenCardContainer}>
                            <ThemedText>I love this</ThemedText>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <SearchInput
                    pattern='Add a comment...'
                    setPattern={() => console.log('typing...')}
                    searching={false}
                    setSearching={() => console.log('typing...')}
                />
            </View>
        </>
    )
}

export default Comment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10
    },

    trackInfoContainer: {
        // borderWidth: 1,
        height: 50,
        width: '100%',
        // margin: 10,
        gap: 7,
        flexDirection: 'row'
    },
    numberOfInterActContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    commentInputContainer: {
        // borderWidth: 1,
        height: '20%'
    },

    patternCommentsContainer: {
        // borderWidth: 1,
        height: 35,
        width: '100%',
        flexDirection: 'row',

    },
    parttenCardContainer: {
        borderWidth: 1,
        borderRadius: 5,
        height: 'auto',
        width: 'auto',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    }
})