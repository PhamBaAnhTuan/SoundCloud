import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { ThemedText } from '../ThemedText'

interface CardProps {
   href: any,
   img: any,
   genre: string,
   subcription: string,
   setTopicTitle: any,
   setTopicImg: any,
}

const TrendByGenreCard = ({ href, img, genre, subcription, setTopicTitle, setTopicImg }: CardProps) => {
   const { theme } = useTheme()
   return (
      <Link href={href} style={[styles.container, { padding: 5 }]}
         onPress={() => (setTopicTitle(genre), setTopicImg(img))}
      >
         <Link.Trigger>
            <View>
               <Image source={{ uri: `${img}` }} style={styles.cardImg} resizeMode='cover' />
               <View style={{ paddingLeft: 5 }}>
                  <ThemedText type='defaultBold' >{genre}</ThemedText>
                  <ThemedText style={{ color: 'gray' }} >{subcription}</ThemedText>
               </View>
            </View>
         </Link.Trigger>
         <Link.Menu >
            <Link.MenuAction title="Share" icon="square.and.arrow.up" onPress={null} />
            <Link.MenuAction title="Like" icon="heart" onPress={null} />
            <Link.MenuAction title="Add to playlist" icon="plus" onPress={null} />
         </Link.Menu>
      </Link>
   )
}

export default TrendByGenreCard

const styles = StyleSheet.create({
   container: {
      // borderWidth: 1,
      height: 230,
      width: 'auto',
      alignItems: 'center',
      justifyContent: 'center'
   },
   cardImg: {
      height: 160,
      width: 160,
      marginBottom: 20
   }
})