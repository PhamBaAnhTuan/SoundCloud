import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/src/components/HapticTab';
import { IconSymbol } from '@/src/components/ui/IconSymbol';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { useTheme } from '@/src/hooks/useTheme';
import { Text, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useTheme()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.text,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: theme.background
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="list.and.film" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          headerShown: true,
          headerRight: () => (
            <View><Text style={{ color: '#fff' }}>hi</Text></View>
          ),
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="character.book.closed.fill.he" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
