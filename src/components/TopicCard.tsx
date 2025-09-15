import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const TopicCard = () => {
   return (
      <Link href={'/profile'} style={styles.container}>
         <Link.Trigger>
            <View style={styles.cardContainer}>
               <Image style={styles.imgContainer} source={require('../assets/images/SoundCloudLogo.png')} resizeMode='contain' />
               <View style={styles.titleContainer}>
                  <Text style={{ fontWeight: 'bold', color: 'white' }}>Hiphop & Rap</Text>
                  <Text style={{ color: 'white' }}>Trending music</Text>
               </View>

            </View>
         </Link.Trigger>
         <Link.Menu>
            <Link.MenuAction title="Share" icon="square.and.arrow.up" onPress={() => alert('shared!')} />
            <Link.MenuAction title="Block" icon="nosign" destructive onPress={null} />
         </Link.Menu>
      </Link>
   )
}

export default TopicCard

const styles = StyleSheet.create({
   container: {
      // borderWidth: 1,
      borderColor: 'white',
      height: 60,
      width: '47%',
      borderRadius: 10,
      backgroundColor: '#272727'
   },
   cardContainer: {
      height: '100%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
   },
   imgContainer: {
      // borderWidth: 1,
      // borderColor: 'white',
      borderRadius: 10,
      height: 50,
      width: 50
   },
   titleContainer: {

   }
})