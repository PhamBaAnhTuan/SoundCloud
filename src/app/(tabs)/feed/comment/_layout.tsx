import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@/src/hooks/useTheme';


export default function CommentLayout() {
    const { theme } = useTheme()
    return (
        <Stack screenOptions={{
            headerShown: false, headerStyle: {
                backgroundColor: theme.background
            }
        }}
            initialRouteName='index'
        >
            <Stack.Screen name="index" options={{
                title: 'Comments',
            }}
            />
            <Stack.Screen name="emoji_list"
                options={{
                    title: 'Emoji List',
                    presentation: 'card',
                    // headerShown: true,
                    headerTintColor: theme.text,
                    gestureDirection: 'horizontal',
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({
})