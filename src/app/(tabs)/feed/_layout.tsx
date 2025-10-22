import { router, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { useCommonContext } from '@/src/context/CommonContext';
import { useTheme } from '@/src/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';


export default function FeedLayout() {
    const { theme } = useTheme()
    const { setPattern, topicTitle } = useCommonContext()
    return (
        <Stack screenOptions={{
            headerShown: false, headerStyle: {
                backgroundColor: theme.background
            }
        }}
            initialRouteName='index'
        >
            <Stack.Screen name="index" options={{
                title: 'Feed',
            }} />
            <Stack.Screen name="comment"
                options={{
                    headerShown: true,
                    title: 'Comments',
                    presentation: 'pageSheet',
                    headerTintColor: theme.text,
                    headerLeft: () => (
                        <TouchableOpacity style={{ opacity: 0.7 }} onPress={() => router.back()}>
                            <Ionicons name="chevron-back-circle" size={31} color={theme.text} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({
})