import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import authReducer from "../slices/authSlice";
import themeReducer from "../slices/themeSlice";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	whitelist: ["auth", "theme"],
};

const rootReducer = combineReducers({
	auth: authReducer,
	theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
	preloadedState: undefined,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
