import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: false,
	},
	reducers: {
		signIn: (state) => {
			console.log("signing in...");
			state.isAuthenticated = true;
		},
		signOut: (state) => {
			console.log("signing out...");
			state.isAuthenticated = false;
		},
	},
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
