import { Image, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import CircleImage from '@/src/components/CircleImage';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';

import MusicRectangleCard from '@/src/components/libraryScreen/MusicRectangleCard';
import { ThemedButton } from '@/src/components/ThemedButton';
import { ThemedText } from '@/src/components/ThemedText';
import { albums } from '@/src/constants/data';
import { useLayout } from '@/src/hooks/useLayout';
import { useTheme } from '@/src/hooks/useTheme';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

const ProfileScreen = () => {
  const { theme } = useTheme()
  const { contentHeight } = useLayout()
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleOpenMenu = () => {
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const handleOptionSelect = (option: any) => {
    console.log(`Selected: ${option}`);
    handleCloseMenu();
  };
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('../../assets/images/SZA.jpg')}
          style={{ alignSelf: 'center', height: '100%', width: '100%' }}
        />}
    >
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={handleOpenMenu}>
          <CircleImage
            image={require('../../assets/images/youngboiz.jpg')}
            size='medium'
          />
        </TouchableOpacity>
        <ThemedText type='largeBold' style={{ marginTop: 10 }}>Tuan Pham</ThemedText>
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
        <ThemedButton onPress={handleOpenMenu}>
          <Entypo name="pencil" size={24} color={theme.icon} />
        </ThemedButton>
        <View style={styles.playContainer}>
          <ThemedButton >
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
      {albums[1].albums.map((item, index) => (
        <MusicRectangleCard
          key={index}
          img={item.img}
          title={item.name}
          artist={item.artist}
          listenCount={997781}
          timeLine={258}
        />
      ))}
      {albums[2].albums.map((item, index) => (
        <MusicRectangleCard
          key={index}
          img={item.img}
          title={item.name}
          artist={item.artist}
          listenCount={997781}
          timeLine={258}
        />
      ))}

      <Modal
        visible={isMenuVisible}
        animationType="slide"
        onRequestClose={handleCloseMenu}
        presentationStyle='formSheet'
        style={{ maxHeight: 300, backgroundColor: 'green' }}
      >
        <View style={{ backgroundColor: theme.background, minHeight: 2000 }}>
          <View style={[styles.headerContainer, { backgroundColor: theme.border }]}>
            <ThemedButton onPress={handleCloseMenu}>
              <ThemedText type='defaultBold'>Cancel</ThemedText>
            </ThemedButton>
            <ThemedText type='largeBold'>Edit Profile</ThemedText>
            <ThemedButton onPress={handleOptionSelect}>
              <ThemedText type='defaultBold'>Save</ThemedText>
            </ThemedButton>
          </View>

          <View style={styles.bodyContainer}>
            <ThemedText type='default'>Display name</ThemedText>
            <TextInput style={styles.input} />
            <ThemedText type='default'>City</ThemedText>
            <TextInput style={styles.input} />
          </View>
        </View>
      </Modal>
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


  headerContainer: {
    // borderWidth: 1,
    height: 55,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 10
  },
  bodyContainer: {
    padding: 10,
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
  input: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 45,
    width: '100%',
    paddingLeft: 5,
    marginBottom: 20
  }
});
