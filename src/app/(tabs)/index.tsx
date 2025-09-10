import { ScrollView, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/src/components/HelloWave';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';
import { Fontisto } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView >
        <ThemedView style={styles.titleContainer}>
          <View style={{ flexDirection: 'row' }}>
            <ThemedText type="subtitle">Welcome!</ThemedText>
            <HelloWave />
          </View>
          <View>
            <Fontisto name="cloud-up" size={24} color="black" />
          </View>
        </ThemedView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
