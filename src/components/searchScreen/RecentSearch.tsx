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

    return (
        <View style={[styles.wrapper, containerStyle]}>
            <ThemedText
                type="defaultBold"
                style={{ color: theme.text, marginBottom: 8 }}
            >
                Recently searched
            </ThemedText>

            <View>
                {children ? (
                    children
                ) : (
                    <ThemedText type="default" style={{ color: theme.subheading }}>
                        No recent searches
                    </ThemedText>
                )}
            </View>
        </View>
    );
};

export default RecentlySearch;

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
    },
    box: {
        // padding: 12,
        // minHeight: 80,
    },
});
