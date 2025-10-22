import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// components
import { HelloWave } from '@/src/components/HelloWave';
import { ThemedButton } from '@/src/components/ThemedButton';
import { ThemedText } from '@/src/components/ThemedText';
import TopicCard from '@/src/components/homeScreen/TopicCard';
import TrendByGenreCard from '@/src/components/homeScreen/TrendByGenreCard';
// hooks
import { useTheme } from '@/src/hooks/useTheme';
// albums
import { albums } from '@/src/constants/data';
// actions
import SafeScrollView from '@/src/components/SafeScrollView';
import { useCommonContext } from '@/src/context/CommonContext';
import { useAppDispatch } from '@/src/hooks/useDispatch';
import { setThemeAction } from '@/src/stores/slices/themeSlice';
import { router } from 'expo-router';

const HomeScreen = () => {
  const { theme, mode } = useTheme()
  const { setTopicTitle, setTopicImg } = useCommonContext()
  const dispatch = useAppDispatch()
  const setTheme = () => {
    dispatch(setThemeAction());
    // dispatch(resetThemeState());
  }
  const height = Dimensions.get('window').height
  const log = () => console.log('height: ', height)

  return (
    <SafeScrollView >
      <View style={styles.titleContainer}>
        <View style={{ flexDirection: 'row', gap: 7 }}>
          <ThemedText type='subtitle' >Welcome!</ThemedText>
          <HelloWave />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <ThemedButton onPress={() => router.push('/home/upload')}>
            <Fontisto name="cloud-up" size={24} color={theme.text} />
          </ThemedButton>
          <ThemedButton onPress={() => router.push('/home/activity')}>
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
        <TouchableOpacity style={styles.randomPlayContainer} onPress={setTheme}>
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
            href={'/(tabs)/home/topic_detail'}
            setTopicTitle={() => setTopicTitle(item.genre)}
            setTopicImg={() => setTopicImg(item.coverImg)}
            icon={item.coverImg}
            title={item.genre}
            genre={item.subscription}
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
                href={'/(tabs)/home/topic_detail'}
                setTopicTitle={() => setTopicTitle(album.name)}
                setTopicImg={() => setTopicImg(album.img)}
                img={album.img}
                genre={album.name}
                subcription={album.subscription}
              />
            ))}
          </ScrollView>
        </View>
      ))}
    </SafeScrollView>
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
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
