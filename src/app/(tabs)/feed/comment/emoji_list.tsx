import InterActedCardList from '@/src/components/feedScreen/InterActedCardList'
import Chooser from '@/src/components/homeScreen/Chooser'
import { useTheme } from '@/src/hooks/useTheme'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

const EmojiList = () => {
    const { theme } = useTheme()
    const [emojies, setEmojies] = useState<string[]>(['123', '321', '213']);
    const [activeTitle, setActiveTitle] = useState<any>(emojies[0]);

    return (
        <>
            <Chooser
                catalogs={emojies}
                activeTitle={activeTitle}
                setActiveTitle={setActiveTitle}
            />
            <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
                <View style={styles.contentContainer}>
                    {activeTitle === emojies[0]
                        ? <InterActedCardList />
                        : activeTitle === emojies[1] ? <InterActedCardList />
                            : <InterActedCardList />
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default EmojiList

const styles = StyleSheet.create({
    contentContainer: {
        padding: 7,
        marginTop: 10
    }
})