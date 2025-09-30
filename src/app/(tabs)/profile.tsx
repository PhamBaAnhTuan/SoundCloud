import { Image } from 'expo-image';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CircleImage from '@/src/components/CircleImage';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';

import { useState } from 'react';

const ProfileScreen = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleButtonPress = () => {
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const handleOptionSelect = (option: any) => {
    console.log(`Selected: ${option}`);
    handleCloseMenu();
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('../../assets/images/SZA.jpg')}
          style={{ alignSelf: 'center', height: '100%', width: '100%' }}
        />

      }>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={handleButtonPress}>
          <CircleImage
            image={require('../../assets/images/youngboiz.jpg')}
            size='medium'
          />
        </TouchableOpacity>
        <Text style={{ marginTop: 10 }}>Tuan Pham</Text>
      </View>
      {/* <ThemedText>hi</ThemedText> */}
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Open Menu</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isMenuVisible}
        animationType="fade"
        onRequestClose={handleCloseMenu}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={handleCloseMenu}
        >
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleOptionSelect('Option 1')}
            >
              <Text style={styles.menuText}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleOptionSelect('Option 2')}
            >
              <Text style={styles.menuText}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleOptionSelect('Option 3')}
            >
              <Text style={styles.menuText}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleOptionSelect('Option 3')}
            >
              <Text style={styles.menuText}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleOptionSelect('Option 3')}
            >
              <Text style={styles.menuText}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleOptionSelect('Option 3')}
            >
              <Text style={styles.menuText}>Option 76</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
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


  // 
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 7,
    width: 300,
    height: 'auto'
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    textAlign: 'center',
  },
});
