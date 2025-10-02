import MasonryList from "@react-native-seoul/masonry-list";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { albums } from "../../constants/data";

const SearchRecommend = () => {
    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.coverImg }} style={[styles.image, { height: item.height }]} />
            <View style={styles.overlay}>
                <Text style={styles.text}>{item.genre}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <MasonryList
                data={albums}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1
    },
    card: {
        borderRadius: 10,
        overflow: "hidden",
        margin: 5,
    },
    image: {
        width: "100%",
        // height: 200,
        borderRadius: 12,
    },
    overlay: {
        position: "absolute",
        bottom: 10,
        left: 10,
        backgroundColor: "rgba(0,0,0,0.4)",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    text: {
        color: "#fff",
        fontWeight: "600",
    },
});

export default SearchRecommend;
