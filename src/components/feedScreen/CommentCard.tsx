import { useTheme } from '@/src/hooks/useTheme'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import CircleImage from '../CircleImage'
import { ThemedButton } from '../ThemedButton'
import { ThemedText } from '../ThemedText'
import { TouchableText } from '../TouchableText'

interface CommentCardProps {
    userAvatar: string,
    userName: string,
    content: string,
    likes: number
}

const CommentCard = ({ userAvatar, userName, content, likes }: CommentCardProps) => {
    const { theme } = useTheme()
    return (
        <View style={styles.commentContainer}>
            <View style={styles.leftCommentContainer}>
                <View style={styles.commentWrap}>
                    <TouchableOpacity>
                        <CircleImage
                            image={{ uri: userAvatar }}
                            size='small'
                        />
                    </TouchableOpacity>
                    <View style={styles.contentContainer}>
                        <ThemedText type='defaultBold'>{userName}</ThemedText>
                        <ThemedText type='default'>{content}</ThemedText>
                    </View>
                </View>
                <View style={{ marginLeft: 5, paddingTop: 5, flexDirection: 'row', gap: 10 }}>
                    <TouchableText type='defaultBold'>Reply</TouchableText>
                    <TouchableText type='defaultBold'>...</TouchableText>
                </View>
            </View>

            <View style={styles.rightCommentContainer}>
                <ThemedButton>
                    <FontAwesome name="heart-o" size={17} color={theme.text} />
                    <ThemedText type='small'>{likes}</ThemedText>
                </ThemedButton>
            </View>
        </View>
    )
}

export default CommentCard

const styles = StyleSheet.create({
    commentContainer: {
        // borderWidth: 1,/
        flexDirection: 'row',
        marginVertical: 5
    },

    leftCommentContainer: {
        // borderWidth: 1,
        width: '85%',
    },
    commentWrap: {
        // borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        gap: 10
    },
    contentContainer: {
        // borderWidth: 1,
        maxWidth: '85%',
        justifyContent: 'space-evenly'
    },

    rightCommentContainer: {
        // borderWidth: 1,
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})