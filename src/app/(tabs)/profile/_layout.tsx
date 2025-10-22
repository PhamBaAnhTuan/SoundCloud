import { router, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedButton } from '@/src/components/ThemedButton';
import { ThemedText } from '@/src/components/ThemedText';
import { useCommonContext } from '@/src/context/CommonContext';
import { useAuth } from '@/src/hooks/useAuth';
import { useTheme } from '@/src/hooks/useTheme';


export default function ProfileLayout() {
    const { theme } = useTheme()
    const user = useAuth()
    const { setPattern, topicTitle, userInfo, handleUpdateProfile } = useCommonContext()
    return (
        <Stack screenOptions={{
            headerShown: false, headerStyle: {
                backgroundColor: theme.background
            }
        }}
            initialRouteName='index'
        >
            <Stack.Screen name="index" options={{
                title: 'Profile',
            }} />
            <Stack.Screen name="edit_profile"
                options={{
                    headerShown: true,
                    title: 'Edit infomations',
                    headerTitleStyle: { color: theme.text },
                    presentation: 'pageSheet',
                    headerLeft: () => (
                        <ThemedButton onPress={() => router.back()}>
                            <ThemedText type='smallBold'>Cancel</ThemedText>
                        </ThemedButton>
                    ),
                    headerRight: () => (
                        <ThemedButton onPress={() => handleUpdateProfile(userInfo)}>
                            <ThemedText type='smallBold'>OK</ThemedText>
                        </ThemedButton>
                    ),
                }}

            />
        </Stack>
    );
}

const styles = StyleSheet.create({
})