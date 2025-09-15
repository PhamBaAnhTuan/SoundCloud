import { Image } from 'expo-image';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';

import CircleImage from '@/src/components/CircleImage';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/ThemedText';

const ProfileScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Pressable >
          <Image source={require('../../assets/images/SZA.jpg')}
            style={{ alignSelf: 'center', height: '100%', width: '100%' }}
          />
        </Pressable>
      }>
      <View style={styles.avatarContainer}>
        <TouchableOpacity>
          <CircleImage
            image={require('../../assets/images/youngboiz.jpg')}
            size='medium'
          />
        </TouchableOpacity>
        <ThemedText type="subtitle" style={{ marginTop: 10 }}>Tuan Pham</ThemedText>
      </View>
      <ThemedText>hi</ThemedText>
    </ParallaxScrollView >
  );
}
export default ProfileScreen;
const styles = StyleSheet.create({
  // headerImage: {
  //   color: '#808080',
  //   bottom: -90,
  //   left: -35,
  //   position: 'absolute',
  // },
  avatarContainer: {
    position: 'fixed',
    top: -70,
    zIndex: 1,
    alignItems: 'center',
    alignSelf: 'center'
  },
});
