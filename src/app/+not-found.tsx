import { router, Stack } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../components/ThemedText';
import { useTheme } from '../hooks/useTheme';


export default function NotFoundScreen() {
  const { theme } = useTheme()
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <ThemedText >This screen does not exist.</ThemedText>
        <TouchableOpacity onPress={() => router.replace('/(tabs)/home')} style={styles.link}>
          <ThemedText >Go to home screen!</ThemedText>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
