import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { HapticTab } from '@/src/components/HapticTab';
import { IconSymbol } from '@/src/components/ui/IconSymbol';
import { useCommonContext } from '@/src/context/CommonContext';
import { useTheme } from '@/src/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';


export default function TabLayout() {
  const { theme } = useTheme()
  const { setPattern } = useCommonContext()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.text,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: theme.background,
          height: 80,
        },
      }}
      initialRouteName='home'
    >
      <Tabs.Screen
        name="home"
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
          headerShown: true,
          headerStyle: { backgroundColor: theme.background },
          headerSearchBarOptions: {
            placeholder: 'Search',
            autoFocus: true,
            onChangeText: (e) => setPattern(e.nativeEvent.text)
          },
          headerTintColor: theme.text,
          title: 'Search',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          headerShown: true,
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text,
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <TouchableOpacity style={styles.settingIcon}>
                <Ionicons name="settings-outline" size={25} color={theme.text} />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="character.book.closed.fill.he" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerRightContainer: {
    // borderWidth: 1,
    paddingRight: 10,
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingIcon: {
    // borderWidth: 1,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
})