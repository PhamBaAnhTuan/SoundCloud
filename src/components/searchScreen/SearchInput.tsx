import { Feather } from "@expo/vector-icons";
import React, { useRef } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { ThemedText } from "../ThemedText";

interface SearchProps {
    pattern: string,
    setPattern: any,
    searching: boolean,
    setSearching: any
}

const SearchInput = ({ pattern, setPattern, searching, setSearching }: SearchProps) => {
    const { theme } = useTheme();
    // const [searching, setSearching] = useState(false);
    // const [pattern, setPattern] = useState("");
    const inputRef = useRef<TextInput>(null);

    const clearPattern = () => {
        setPattern('');
        inputRef.current?.focus();
    };

    const cancelSearch = () => {
        setPattern('');
        setSearching(false);
        inputRef.current?.blur();
    };

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.inputContainer,
                    { backgroundColor: theme.card },
                    searching ? { width: "80%" } : { width: "100%" },
                ]}
            >
                <TextInput
                    ref={inputRef}
                    style={[
                        searching ? styles.onFocus : styles.input,
                        { backgroundColor: theme.card, color: theme.text },
                    ]}
                    value={pattern}
                    placeholder="Search"
                    placeholderTextColor={theme.subheading}
                    onChangeText={text => setPattern(text)}
                    onFocus={() => setSearching(true)}
                    onBlur={() => setSearching(false)}
                />

                {searching && pattern.length > 0 && (
                    <TouchableOpacity style={styles.clearBtn} onPress={clearPattern}>
                        <Feather name="x-circle" size={22} color={theme.text} />
                    </TouchableOpacity>
                )}
            </View>

            {searching && (
                <TouchableOpacity style={styles.cancelBtn} onPress={cancelSearch}>
                    <ThemedText type="defaultBold">Cancel</ThemedText>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: "100%",
        flexDirection: "row",
        marginBottom: 5
    },
    inputContainer: {
        borderRadius: 100,
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        borderRadius: 100,
        height: "100%",
        width: "100%",
        paddingLeft: 10,
    },
    onFocus: {
        borderRadius: 100,
        height: "100%",
        width: "85%",
        paddingLeft: 10,
    },
    clearBtn: {
        height: "100%",
        width: '12%',
        alignItems: "center",
        justifyContent: "center",
    },
    cancelBtn: {
        height: "100%",
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
});
