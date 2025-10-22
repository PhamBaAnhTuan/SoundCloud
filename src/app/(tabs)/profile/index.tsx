import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import CircleImage from '@/src/components/CircleImage';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';

import MusicRectangleCard from '@/src/components/libraryScreen/MusicRectangleCard';
import { ThemedButton } from '@/src/components/ThemedButton';
import { ThemedText } from '@/src/components/ThemedText';
import { albums } from '@/src/constants/data';
import { useAuth } from '@/src/hooks/useAuth';
import { useTheme } from '@/src/hooks/useTheme';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect } from 'react';

const ProfileScreen = () => {
  const { theme } = useTheme()
  const { userName } = useAuth()
  useEffect(()=>{

  },[])
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('../../../assets/images/SZA.jpg')}
          style={{ alignSelf: 'center', height: '100%', width: '100%' }}
        />}
    >
      <View style={styles.avatarContainer}>
        <CircleImage
          image={require('../../../assets/images/youngboiz.jpg')}
          size='medium'
        />
        <ThemedText type='largeBold' style={{ marginTop: 10 }}>{userName ? userName : 'userID'}</ThemedText>
      </View>

      <View style={styles.followContainer}>
        <ThemedButton >
          <ThemedText type='smallBold'>99 Followers</ThemedText>
        </ThemedButton>
        <ThemedButton >
          <ThemedText type='smallBold'>99 Following</ThemedText>
        </ThemedButton>
      </View>

      <View style={styles.interActContainer}>
        <ThemedButton onPress={() => router.push('/profile/edit_profile')}>
          <Entypo name="pencil" size={24} color={theme.icon} />
        </ThemedButton>
        <View style={styles.playContainer}>
          <ThemedButton>
            <FontAwesome name="random" size={25} color={theme.icon} />
          </ThemedButton>
          <ThemedButton >
            <AntDesign name="play-circle" size={45} color={theme.icon} />
          </ThemedButton>
        </View>
      </View>

      <View style={styles.likedTrackListContainer}>
        <ThemedText type='subtitle' >Liked tracks</ThemedText>
        <TouchableOpacity>
          <ThemedText type='small' >See all</ThemedText>
        </TouchableOpacity>
      </View>
      {albums[0].albums.map((item, index) => (
        <MusicRectangleCard
          key={index}
          img={item.img}
          title={item.name} artist={item.artist}
          listenCount={997781}
          timeLine={258}
        />
      ))}
    </ParallaxScrollView>
  );
}
export default ProfileScreen;

const styles = StyleSheet.create({
  avatarContainer: {
    // borderWidth: 1,
    position: 'fixed',
    top: -30,
    zIndex: 1,
    alignItems: 'center',
    alignSelf: 'center'
  },

  followContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
    left: 90
  },

  interActContainer: {
    // borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  playContainer: {
    flexDirection: 'row'
  },


  likedTrackListContainer: {
    marginTop: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
