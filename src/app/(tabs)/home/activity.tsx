import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Chooser from '@/src/components/homeScreen/Chooser';
import NotificationList from '@/src/components/homeScreen/NotificationList';
import { ThemedText } from '@/src/components/ThemedText';
import { useTheme } from '@/src/hooks/useTheme';

const ActivityScreen = () => {
    const { theme } = useTheme()
    const [activeTitle, setActiveTitle] = useState<any>('Notifications')

    return (
        <>
            <Chooser
                catalogs={['Notifications', 'Messages']}
                activeTitle={activeTitle}
                setActiveTitle={setActiveTitle}
            />
            <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
                <View style={styles.contentContainer}>
                    {activeTitle === 'Notifications'
                        ? <NotificationList />
                        : <ThemedText type='largeBold'>No conversation yet...</ThemedText>
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default ActivityScreen

const styles = StyleSheet.create({
    switchBtnContainer: {
        // borderWidth: 1,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    contentContainer: {
        padding: 7
    }
})