
import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { ThemedText } from '../ThemedText'


interface TopicCardProps {
   href?: any,
   icon: any,
   title: string,
   genre: string,
   onShare?: () => void,
   onLike?: () => void,
   onAddToPlayList?: () => void,
   onStartstation?: () => void,
   onPlayNext?: () => void,
   onPlayLast?: () => void,
   setTopicTitle: any,
   setTopicImg: any,
}

const TopicCard = ({ href, icon, title, genre, setTopicTitle, setTopicImg }: TopicCardProps) => {
   const { theme } = useTheme()
   return (
      <Link href={href} style={[styles.container, { backgroundColor: theme.card }]}
         onPress={() => (setTopicTitle(title), setTopicImg(icon))}
      >
         <Link.Trigger>
            <View style={styles.cardContainer}>
               <Image style={styles.imgContainer} source={{ uri: icon }} resizeMode='contain' />
               <View >
                  <ThemedText type='defaultBold' style={{ fontWeight: 'bold' }} numberOfLines={1}>{title}</ThemedText>
                  <ThemedText type='small' >{genre}</ThemedText>
               </View>

            </View>
         </Link.Trigger>
         <Link.Menu>
            <Link.MenuAction title="Share" icon="square.and.arrow.up" onPress={null} />
            <Link.MenuAction title="Like" icon="heart" onPress={null} />
            <Link.MenuAction title="Add to playlist" icon="plus" onPress={null} />
            {/* <Link.Menu title="More" icon="ellipsis">
               <Link.MenuAction title="Copy" icon="doc.on.doc" onPress={() => { }} />
               <Link.MenuAction title="Delete" icon="trash" destructive onPress={() => { }} />
            </Link.Menu> */}
         </Link.Menu>
      </Link>
   )
}

export default TopicCard

const styles = StyleSheet.create({
   container: {
      // borderWidth: 1,
      height: 60,
      width: '48%',
      borderRadius: 10,
      marginVertical: 3,
      paddingHorizontal: 5
   },
   cardContainer: {
      height: '100%',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7
   },
   imgContainer: {
      // borderWidth: 1,
      borderRadius: 10,
      height: 50,
      width: 50,
      // marginRight: 10,
   },
})