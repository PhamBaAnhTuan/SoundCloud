import { ThemedText } from '@/src/components/ThemedText';
import { useTheme } from '@/src/hooks/useTheme';
import { TrackInfo } from '@/src/types/common';
import * as DocumentPicker from 'expo-document-picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const UploadScreen = () => {
    const { theme } = useTheme()
    const [file, setFile]: any = useState(null);
    const [isPicking, setIsPicking] = useState(false);
    const [data, setData] = useState<TrackInfo>({
        thumpnail: '',
        trackName: '',
        artist: '',
    })

    const pickDocument = async () => {
        if (isPicking) return;

        try {
            setIsPicking(true);
            const res = await DocumentPicker.getDocumentAsync({
                type: [
                    "audio/*",
                    "public.audio",
                    "public.mp3",
                    "public.mpeg-4-audio",
                ],
                copyToCacheDirectory: true,
                multiple: false,
            });

            if (res.canceled) {
                console.log("User canceled");
                return;
            }

            if (res.assets && res.assets.length > 0) {
                const fileSelected = res.assets[0];
                console.log("File selected:", fileSelected.name);
                setFile(fileSelected);
            }
        } catch (error) {
            console.error("Error picking document:", error);
        } finally {
            setIsPicking(false);
        }
    };
    const handlePublicTrack = () => {
        if (!file) return alert('There is no track file!')
        router.back()
    }
    return (
        <View style={{ flex: 1, padding: 5, backgroundColor: theme.background }}>
            <View style={[styles.headerLine, { backgroundColor: theme.card }]}></View>
            <Button title="Pick a track" onPress={pickDocument} disabled={isPicking} />
            {file && (
                <Text style={{ marginVertical: 10 }}>
                    📄 {file.name} ({Math.round(file.size / 1024)} KB)
                </Text>
            )}
            <View style={{ padding: 5 }}>
                <ThemedText type='smallBold'>Track name</ThemedText>
                <TextInput style={[styles.input, { color: theme.text, borderColor: theme.text }]}
                    value={data.trackName}
                    onChangeText={(value: any) => setData({ ...data, trackName: value })}
                />
                <ThemedText type='smallBold'>Artist name</ThemedText>
                <TextInput style={[styles.input, { color: theme.text, borderColor: theme.text }]}
                    value={data.artist}
                    onChangeText={(value: any) => setData({ ...data, artist: value })}
                />
            </View>
            <Button title="Public your track" onPress={handlePublicTrack} />
        </View>
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    headerLine: {
        height: 5,
        width: 40,
        marginVertical: 5,
        borderRadius: 5,
        alignSelf: 'center'
    },

    input: {
        // borderWidth: 1,
        borderBottomWidth: 1,
        height: 40,
        width: '100%',
        marginBottom: 20
    }
})