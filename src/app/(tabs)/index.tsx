import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/src/components/HelloWave';
import { ThemedText } from '@/src/components/ThemedText';
import TopicCard from '@/src/components/TopicCard';
import { FontAwesome, FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView >
        <View style={styles.titleContainer}>
          <View style={{ flexDirection: 'row', gap: 7 }}>
            <ThemedText type="subtitle">Welcome!</ThemedText>
            <HelloWave />
          </View>
          <View style={{ gap: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity>
              <Fontisto name="cloud-up" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.randomPlayContainer}>
          <View style={{ gap: 15, flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="heartbeat" size={40} color="red" />
            <ThemedText type='subtitle'>Your likes</ThemedText>
          </View>
          <TouchableOpacity style={{ height: 40, width: 40, borderRadius: '50%', backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name="random" size={24} color="white" />
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.topicContainer}>
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen

const styles = StyleSheet.create({
  titleContainer: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  randomPlayContainer: {
    height: 65,
    width: '97%',
    alignSelf: 'center',
    backgroundColor: 'darkorange',
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  topicContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    minHeight: 150,
    width: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-around'
  }
});
