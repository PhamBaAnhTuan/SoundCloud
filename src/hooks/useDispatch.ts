import { useDispatch } from "react-redux";
import { Dispatch } from "../stores/config/store";

export const useAppDispatch = () => {
	return useDispatch<Dispatch>();
};
