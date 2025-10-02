import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import { HelloWave } from '@/src/components/HelloWave';
import { ThemedButton } from '@/src/components/ThemedButton';
import { ThemedText } from '@/src/components/ThemedText';
import TopicCard from '@/src/components/TopicCard';
import TrendByGenreCard from '@/src/components/TrendByGenreCard';
// hooks
import { useTheme } from '@/src/hooks/useTheme';
// albums
import { albums } from '@/src/constants/data';
// actions
import { useAppDispatch } from '@/src/hooks/useDispatch';
import { setThemeAction } from '@/src/stores/slices/themeSlice';


const HomeScreen = () => {
  const { theme, mode } = useTheme()
  const dispatch = useAppDispatch()
  const setTheme = () => {
    dispatch(setThemeAction());
    // dispatch(resetThemeState());
  }
  const height = Dimensions.get('window').height
  const log = () => console.log('height: ', height)
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 5, backgroundColor: theme.background }}>
      <ScrollView style={{ height: height }}>

        <View style={styles.titleContainer}>
          <View style={{ flexDirection: 'row', gap: 7 }}>
            <ThemedText type='subtitle' >Welcome!</ThemedText>
            <HelloWave />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <ThemedButton onPress={() => setTheme()}>
              <Fontisto name="cloud-up" size={24} color={theme.text} />
            </ThemedButton>
            <ThemedButton onPress={log}>
              <Ionicons name="chatbubble-ellipses-outline" size={24} color={theme.text} />
            </ThemedButton>
          </View>
        </View>


        <LinearGradient
          colors={[theme.error, theme.border]}
          style={{
            borderRadius: 10
          }}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity style={styles.randomPlayContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Your likes</Text>
            </View>
            <ThemedButton style={{ backgroundColor: theme.border }} >
              <FontAwesome name="random" size={21} color={theme.text} />
            </ThemedButton>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.topicContainer}>
          {albums.map((item, index) => (
            <TopicCard
              key={index}
              icon={"https://images.genius.com/1efc5de2af228d2e49d91bd0dac4dc49.300x300x1.jpg"}
              title={item.genre}
              genre={'item.genre'}
            />
          ))}
        </View>

        {albums.map((item, index) => (
          <View key={index}>
            <ThemedText type='subtitle' style={{ marginVertical: 10 }} >{item.genre}</ThemedText>
            <ScrollView horizontal={true} style={styles.trendByGenreContainer}>
              {item.albums.map((album, index) => (
                <TrendByGenreCard
                  key={index}
                  img={album.img}
                  genre={album.name}
                  subcription={album.subscription}
                />
              ))}
            </ScrollView>
          </View>
        ))}

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
    // paddingHorizontal: 10
  },
  randomPlayContainer: {
    height: 65,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  topicContainer: {
    // borderWidth: 1,
    minHeight: 150,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-evenly'
  },

  trendByGenreContainer: {
    // borderWidth: 1,
    borderColor: 'white',
    height: 250,
    width: '100%',
    flexDirection: 'row',
    // padding: 5
  }
});
