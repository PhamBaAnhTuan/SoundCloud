import { useColorScheme } from '@/src/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
// redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CommonProvider } from '../context/CommonContext';
import { persistor, store } from '../stores/config/store';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CommonProvider>
            <Stack screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </CommonProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
