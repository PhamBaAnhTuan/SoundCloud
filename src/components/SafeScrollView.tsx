import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../hooks/useTheme";

type SafeScrollViewProps = ScrollViewProps & {
    edges?: ("top" | "bottom" | "left" | "right")[];
};

const SafeScrollView: React.FC<SafeScrollViewProps> = ({
    children,
    edges = ["top"],
    contentContainerStyle,
    ...rest
}) => {
    const { theme } = useTheme()
    return (
        <SafeAreaView edges={edges} style={{
            flex: 1,
            backgroundColor: theme.background,
            paddingHorizontal: 5
        }}>
            <ScrollView
                style={{ flex: 1 }}
                {...rest}
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SafeScrollView;
