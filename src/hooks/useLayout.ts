// src/hooks/useLayout.ts
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useLayout = (topTabHeight: number = 0) => {
	const SCREEN_HEIGHT = Dimensions.get("window").height;
	const insets = useSafeAreaInsets();
	const bottomTabHeight = useBottomTabBarHeight();

	const contentHeight = SCREEN_HEIGHT - bottomTabHeight - topTabHeight;

	return {
		SCREEN_HEIGHT,
		contentHeight,
		insets,
		bottomTabHeight,
		topTabHeight,
	};
};
