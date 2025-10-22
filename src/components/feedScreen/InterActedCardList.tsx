import { userAvatars } from '@/src/constants/data'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import InterActedCard from './InterActedCard'
const data = ['2:11', '3:15', '4:20', '5:25', '6:30', '7:35', '8:40', '9:45', '10:50', '11:55']

const InterActedCardList = () => {
    return (
        <View>
            {data.map((item: any, index: number) => (
                <InterActedCard
                    key={index}
                    userAvatar={userAvatars}
                    userName={`User ${index + 123}`}
                    time={item}
                />
            ))}
        </View>
    )
}

export default InterActedCardList

const styles = StyleSheet.create({})