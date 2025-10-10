import { Link, LinkComponent, LinkProps } from "expo-router";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "../hooks/useTheme";

type LinkPreViewProps = LinkProps & {
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
    href?: LinkComponent,
    onShare?: any,
    onLike?: any,
    onAddToPlaylist?: any,
    onCopy?: any,
    onDelete?: any,
};

export const LinkPreView = ({ children, style,
    href, onShare, onLike, onAddToPlaylist, onCopy, onDelete,
    ...rest }: LinkPreViewProps) => {
    const theme = useTheme();

    return (
        <Link href={href} {...rest} >
            <Link.Trigger>
                {children}
            </Link.Trigger>
            <Link.Menu>
                {onShare && <Link.MenuAction title="Share" icon="square.and.arrow.up" onPress={onShare} />}
                {onLike && <Link.MenuAction title="Like" icon="heart" onPress={onLike} />}
                {onAddToPlaylist && <Link.MenuAction title="Add to playlist" icon="plus" onPress={onAddToPlaylist} />}
                {onCopy || onDelete && <Link.Menu title="More" icon="ellipsis">
                    {onCopy && <Link.MenuAction title="Copy" icon="doc.on.doc" onPress={onCopy} />}
                    {onDelete && <Link.MenuAction title="Delete" icon="trash" destructive onPress={onDelete} />}
                </Link.Menu>}
            </Link.Menu>
        </Link>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 'auto',
        width: 'auto'
    }
});
