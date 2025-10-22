import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../stores/config/store";

export const useTheme = () => {
	const { mode, light, dark } = useSelector((state: RootState) => state.theme, shallowEqual);
	const theme = mode === "light" ? light : dark;
	return { theme, mode, light, dark };
};
