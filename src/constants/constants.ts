import { StatusBar, useWindowDimensions } from "react-native";

export const { height, width } = useWindowDimensions();
export const statusBarHeight = StatusBar.currentHeight;
export const constants = {
	borderRadius: 10,
	small: 12,
	medium: 14,
	large: 17,
};
export const borderRadius = 10;
