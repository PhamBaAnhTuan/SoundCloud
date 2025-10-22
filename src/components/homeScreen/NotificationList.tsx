import { useTheme } from '@/src/hooks/useTheme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import NotificationCard from './NotificationCard'



const NotificationList = () => {
    const { theme } = useTheme()
    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <NotificationCard
                followerAvatar={'https://i.ytimg.com/vi/6ch20anAJsM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqSyYG0iC_8Y6kUk2MxbC6fyGJEA'}
                followerName='phbatuan'
                isFollowed={true}
            />
            <NotificationCard
                followerAvatar={'https://i.ytimg.com/vi/6ch20anAJsM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqSyYG0iC_8Y6kUk2MxbC6fyGJEA'}
                followerName='TravisScottTripping'
                isFollowed={false}
            />
        </View>
    )
}

export default NotificationList

const styles = StyleSheet.create({})