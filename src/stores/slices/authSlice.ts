import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: false,
		userName: "",
		password: "",
		city: "",
		country: "",
		bio: "",
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
		updateProfile: (state, action) => {
			console.log(action.payload);
			state.userName = action.payload.userName;
			state.city = action.payload.city;
			state.country = action.payload.country;
			state.bio = action.payload.bio;
		},
	},
});

export const { signIn, signOut, updateProfile } = authSlice.actions;
export default authSlice.reducer;
