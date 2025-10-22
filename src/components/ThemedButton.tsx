import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { useTheme } from "../hooks/useTheme";

type ThemedButtonProps = TouchableOpacityProps & {
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
};

export const ThemedButton = ({ children, style, ...rest }: ThemedButtonProps) => {
    const theme = useTheme();

    return (
        <TouchableOpacity
            style={[styles.button, style]}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: '50%',
        alignItems: "center",
        justifyContent: "center",
    },
});
