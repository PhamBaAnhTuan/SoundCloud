import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../stores/config/store";

export const useAuth = () => {
	const { isAuthenticated, userName, password, city, country, bio } = useSelector(
		(state: RootState) => state.auth,
		shallowEqual,
	);
	return { isAuthenticated, userName, password, city, country, bio };
};
