import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { ThemedText } from '../ThemedText';


interface CatalogCardProps {
   title: string;
   numOfElement: number,
   activeTitle: string;
   setActiveTitle: (text: string) => void,
   fire: string,
   claps: string,
   cries: string,
}

const CatalogCard = ({ title, numOfElement, activeTitle, setActiveTitle, fire, claps, cries }: CatalogCardProps) => {
   const { theme } = useTheme()
   const width = 100 / numOfElement

   return (
      <TouchableOpacity
         onPress={() => setActiveTitle(title)}
         style={[styles.container, { width: `${width}%` },
         activeTitle === title && [styles.cardActive, { borderColor: theme.primary }]]}
      >
         <ThemedText style={{ fontWeight: '500', color: theme.heading }}>{
            title === fire
               ? `🔥${title}`
               : title === claps
                  ? `👏${title}`
                  : title === cries
                     ? `🥹${title}`
                     : title
         }</ThemedText>
      </TouchableOpacity>
   )
}

export default CatalogCard

const styles = StyleSheet.create({
   container: {
      // borderWidth: 1,
      // borderRadius: 5
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   cardActive: {
      borderBottomWidth: 2,
   },
})