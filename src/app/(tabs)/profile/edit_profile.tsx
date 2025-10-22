import { ThemedText } from '@/src/components/ThemedText'
import { useCommonContext } from '@/src/context/CommonContext'
import { useTheme } from '@/src/hooks/useTheme'
import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const EditProfile = () => {
    const { theme } = useTheme()
    const { userInfo, setUserInfo, handleUpdateProfile } = useCommonContext()
    const [isInfoChanged, setIsInfoChanged] = useState(false)

    return (
        <View style={{ backgroundColor: theme.background, minHeight: 2000 }}>

            <View style={styles.bodyContainer}>
                <ThemedText type='smallBold'>Display name</ThemedText>
                <TextInput style={styles.input} placeholder=''
                    value={userInfo.userName}
                    onChangeText={(value: any) => setUserInfo({ ...userInfo, userName: value })}
                />
                <ThemedText type='smallBold'>City</ThemedText>
                <TextInput style={styles.input} placeholder='Where are you based?'
                    value={userInfo.city}
                    onChangeText={(value: any) => setUserInfo({ ...userInfo, city: value })}
                />
                <ThemedText type='smallBold'>Country</ThemedText>
                <TextInput style={styles.input} placeholder='Input your country'
                    value={userInfo.country}
                    onChangeText={(value: any) => setUserInfo({ ...userInfo, country: value })}
                />
                <ThemedText type='smallBold'>Bio</ThemedText>
                <TextInput style={styles.input} placeholder='Tell the world a bit about yourself'
                    value={userInfo.bio}
                    onChangeText={(value: any) => setUserInfo({ ...userInfo, bio: value })}
                />
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    headerContainer: {
        // borderWidth: 1,
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 10
    },
    bodyContainer: {
        padding: 15,
    },


    input: {
        // borderWidth: 1,
        borderBottomWidth: 1,
        height: 45,
        width: '100%',
        marginBottom: 20
    }
})