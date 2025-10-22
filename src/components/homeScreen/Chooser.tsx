import { useTheme } from '@/src/hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CatalogCard from './CatalogCard';

interface ChooserProps {
   catalogs: string[]
   activeTitle: string,
   setActiveTitle: (text: string) => void,
}

const Chooser = ({ catalogs, activeTitle, setActiveTitle }: ChooserProps) => {
   const { theme } = useTheme()
   const numOfElement = catalogs.length

   return (
      <View style={[styles.catalogContainer, { backgroundColor: theme.background }]}>
         {catalogs && catalogs.map((item, index) => (
            <CatalogCard
               fire={catalogs[0]}
               claps={catalogs[1]}
               cries={catalogs[2]}
               numOfElement={numOfElement}
               key={index}
               title={item}
               activeTitle={activeTitle}
               setActiveTitle={setActiveTitle}
            />
         ))}
      </View>
   )
}

export default Chooser

const styles = StyleSheet.create({
   catalogContainer: {
      // borderWidth: 1,
      flexDirection: 'row',
      height: 50,
      width: '100%',
      alignSelf: 'center',
      justifyContent: 'space-around',
   },
})