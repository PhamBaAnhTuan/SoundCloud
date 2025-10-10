import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mode: "light",
	light: {
		primary: "#007bff",
		secondary: "#f83706",
		background: "#ffffff",
		text: "#212529",
		icon: "#495057",
		border: "#dee2e6",
		button: "#007bff",
		heading: "#343a40",
		subheading: "#6c757d",
		error: "#dc3545",
		success: "#28a745",
		warning: "#fd7e14",
		info: "#17a2b8",
		card: "#eeeeee",
		white: "#ffffff",
		black: "#000",
		darkblue: "#191970",
	},
	dark: {
		primary: "#0d6efd",
		secondary: "#f83706",
		background: "#212529",
		text: "#f8f9fa",
		icon: "#adb5bd",
		border: "#495057",
		button: "#0d6efd",
		heading: "#f8f9fa",
		subheading: "#ced4da",
		error: "#f87171",
		success: "#34d399",
		warning: "#fbbf24",
		info: "#38bdf8",
		card: "#343a40",
		white: "#ffffff",
		black: "#000",
		darkblue: "#191970",
	},
};
const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		resetThemeState: () => {
			console.log("Current state: ", initialState);
			return initialState;
		},
		setThemeAction: (state) => {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
	},
});

export const { resetThemeState, setThemeAction } = themeSlice.actions;
export default themeSlice.reducer;
