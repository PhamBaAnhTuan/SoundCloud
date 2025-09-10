import React from 'react'
import { Image, StyleSheet } from 'react-native'

interface ImageProps {
   image: any,
   size?: 'small' | 'medium' | 'large'
}

const CircleImage = ({ image, size }: ImageProps) => {
   return (
      <Image source={image}
         style={[{
            borderRadius: '50%',
            // alignSelf: 'center',
         },
         size === 'small' ? styles.small : undefined,
         size === 'medium' ? styles.medium : undefined,
         size === 'large' ? styles.large : undefined,
         ]}
      />
   )
}

export default CircleImage

const styles = StyleSheet.create({
   small: {
      height: 50,
      width: 50
   },
   medium: {
      height: 100,
      width: 100
   },
   large: {
      height: 150,
      width: 150
   },

})