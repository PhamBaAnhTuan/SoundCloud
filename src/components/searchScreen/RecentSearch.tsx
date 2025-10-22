import { useLayout } from "@/src/hooks/useLayout";
import { useTheme } from "@/src/hooks/useTheme";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";


type Props = {
    children?: React.ReactNode;
    containerStyle?: ViewStyle;
};

const RecentlySearch: React.FC<Props> = ({ children, containerStyle }) => {
    const { theme } = useTheme();
    const { contentHeight } = useLayout()

    return (
        <View style={[styles.wrapper, containerStyle, { backgroundColor: theme.background, height: contentHeight }]}>
            {children ? (
                children
            ) : (
                <ThemedText type="default" style={{ color: theme.subheading }}>
                    No recent searches
                </ThemedText>
            )}
        </View>
    );
};

export default RecentlySearch;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: '100%',
        width: "100%",
        padding: 5
    },
});
