import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedButton } from '@/src/components/ThemedButton';
import { useCommonContext } from '@/src/context/CommonContext';
import { useTheme } from '@/src/hooks/useTheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function HomeLayout() {
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
                title: 'Home',
            }} />
            <Stack.Screen name="activity"
                options={{
                    headerShown: true,
                    title: 'Activity',
                    headerTitleStyle: { color: theme.text },
                    headerRight: () => (
                        <ThemedButton>
                            <MaterialCommunityIcons name="sort-variant" size={24} color={theme.text} />
                        </ThemedButton>
                    )
                }}

            />
            <Stack.Screen name="upload"
                options={{
                    title: 'Upload',
                    presentation: 'pageSheet',
                }}
            />
            <Stack.Screen name="topic_detail"
                options={{
                    title: topicTitle,
                    headerShown: true,
                    headerStyle: { backgroundColor: theme.background },
                    headerTintColor: theme.text,
                    // headerSearchBarOptions: {
                    //     placeholder: 'Search',
                    //     onChangeText: (e) => setPattern(e.nativeEvent.text),
                    //     textColor: theme.text,
                    //     tintColor: theme.text,
                    //     hintTextColor: theme.text,
                    //     headerIconColor: theme.text,
                    //     barTintColor: theme.border,
                    //     hideWhenScrolling: true,
                    // },
                }}
            />
        </Stack>
    );
}

const styles = StyleSheet.create({
})