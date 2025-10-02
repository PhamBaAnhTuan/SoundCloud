import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { ThemedText } from './ThemedText'

interface CardProps {
   img: any,
   genre: string,
   subcription: string
}

const TrendByGenreCard = ({ img, genre, subcription }: CardProps) => {
   const { theme } = useTheme()
   return (
      <Link href={'#'} style={[styles.container, { padding: 7 }]}>
         <Link.Trigger>
            <View >
               <Image source={{ uri: `${img}` }} style={styles.cardImg} resizeMode='cover' />
               <View style={{ paddingLeft: 5 }}>
                  <ThemedText type='defaultSemiBold'>{genre}</ThemedText>
                  <ThemedText style={{ color: 'gray' }}>{subcription}</ThemedText>
               </View>
            </View>
         </Link.Trigger>
         <Link.Menu >
            <Link.MenuAction title="Share" icon="square.and.arrow.up" onPress={null} />
            <Link.MenuAction title="Like" icon="heart" onPress={null} />
            <Link.MenuAction title="Add to playlist" icon="plus" onPress={null} />
            <Link.Menu title="More" icon="ellipsis">
               <Link.MenuAction title="Copy" icon="doc.on.doc" onPress={() => { }} />
               <Link.MenuAction title="Delete" icon="trash" destructive onPress={() => { }} />
            </Link.Menu>
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